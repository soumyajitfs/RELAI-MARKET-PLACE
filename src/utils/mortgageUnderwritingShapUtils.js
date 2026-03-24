const formatValue = (val) => {
  if (val == null || val === '') return '—';
  if (typeof val === 'number') return val % 1 === 0 ? String(val) : val.toFixed(3);
  if (typeof val === 'string' && val.includes('T')) return val.split('T')[0];
  return String(val);
};

const prettifyFeatureName = (feature) => {
  if (!feature) return '—';
  const text = String(feature);
  return text.replace(/_/g, ' ');
};

const resolveFeatureInfo = (row, feature) => {
  if (!row) return null;

  // Exact match first.
  if (row[feature] != null) {
    return { name: prettifyFeatureName(feature), value: row[feature] };
  }

  // Handle one-hot-like SHAP features e.g. AUS_Risk_Class_C -> AUS_Risk_Class
  const parts = String(feature).split('_');
  for (let i = parts.length - 1; i > 1; i -= 1) {
    const baseKey = parts.slice(0, i).join('_');
    if (row[baseKey] != null) {
      return { name: prettifyFeatureName(baseKey), value: row[baseKey] };
    }
  }

  return { name: prettifyFeatureName(feature), value: null };
};

/** Maps backend decision text to SHAP chart category (High/Low/Medium) and badge label. */
const decisionToShapDisplay = (decisionRaw) => {
  const d = String(decisionRaw || '')
    .trim()
    .toLowerCase();
  if (d === 'approved') {
    return { predictedCategory: 'High', categoryDisplayLabel: 'Approved' };
  }
  if (d === 'cancelled') {
    return { predictedCategory: 'Low', categoryDisplayLabel: 'Cancelled' };
  }
  if (d === 'declined') {
    return { predictedCategory: 'Low', categoryDisplayLabel: 'Declined' };
  }
  if (d === 'suspended') {
    return { predictedCategory: 'Medium', categoryDisplayLabel: 'Suspended' };
  }
  const fallback =
    decisionRaw && String(decisionRaw).trim()
      ? String(decisionRaw).charAt(0).toUpperCase() + String(decisionRaw).slice(1).toLowerCase()
      : 'Unknown';
  return { predictedCategory: 'Low', categoryDisplayLabel: fallback };
};

export const buildMortgageUnderwritingShapData = (row) => {
  if (!row || !Array.isArray(row.shapValues) || row.shapValues.length === 0) return null;

  const features = row.shapValues.map((sv) => {
    const resolved = resolveFeatureInfo(row, sv.feature);
    return {
      name: resolved?.name || prettifyFeatureName(sv.feature),
      impact: sv.impact,
      value: formatValue(resolved?.value),
    };
  });

  features.sort((a, b) => {
    if (a.impact >= 0 && b.impact < 0) return -1;
    if (a.impact < 0 && b.impact >= 0) return 1;
    return Math.abs(b.impact) - Math.abs(a.impact);
  });

  const { predictedCategory, categoryDisplayLabel } = decisionToShapDisplay(row.decision);
  const probability = row.confidence != null ? row.confidence : ((row.confidencePercent || 0) / 100);

  return {
    facsNumber: row['Application ID'] ?? row.Applicant_ID,
    features,
    predictedCategory,
    categoryDisplayLabel,
    probability,
    categoryContextLabel: 'Underwriting Approval',
    factorContextLabel: '',
    legendHighText: 'Increases probability toward Higher likelihood of Approval',
    legendLowText: 'Increases probability toward Lower likelihood of Approval',
  };
};

export default buildMortgageUnderwritingShapData;
