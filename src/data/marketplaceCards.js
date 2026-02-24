const marketplaceCards = [
  {
    id: 'patient-collectability',
    title: 'Patient Collectability',
    description: 'Predicts patients likely to repay, enabling optimized debt collection strategies.',
    vertical: 'Provider',
    modelType: 'Classification',
    enabled: true,
    route: '/patient-collectability'
  },
  {
    id: 'claims-denial',
    title: 'Claims Denial Prediction',
    description: 'Predict claims that are likely to be denied by Healthcare payers.',
    vertical: 'Provider',
    modelType: 'Classification',
    enabled: false
  },
  {
    id: 'payer-collectability',
    title: 'Payer collectability',
    description: 'Segments accounts based on financial risk and expected recovery probability.',
    vertical: 'Provider',
    modelType: 'Classification',
    enabled: false
  },
  {
    id: 'right-party-contact',
    title: 'Right Party contact',
    description: 'Identifies high RPC likelihood accounts for targeted collections outreach.',
    vertical: 'BFS',
    modelType: 'Classification',
    enabled: true,
    route: '/rpc-contact'
  },
  {
    id: 'complaints-forecasting',
    title: 'Customer complaints forecasting',
    description: 'Forecasting complaints volume based on multiple sources of historical data.',
    vertical: 'BFS',
    modelType: 'Forecasting',
    enabled: false
  },
  {
    id: 'aml-alert',
    title: 'AML – Alert Prioritization',
    description: 'Predicts which telecom customers are likely to churn using usage patterns.',
    vertical: 'BFS',
    modelType: 'Classification',
    enabled: false
  },
  {
    id: 'customer-churn',
    title: 'Customer churn prediction',
    description: 'Predict customers likely to churn to enable effective retention strategies.',
    vertical: 'Telecom',
    modelType: 'Classification',
    enabled: false
  },
  {
    id: 'sentiment-analytics',
    title: 'Customer sentiment analytics',
    description: 'Analyzing sentiment, toxicity and emotion from customer interactions.',
    vertical: 'Telecom',
    modelType: 'Classification',
    enabled: false
  },
  {
    id: 'propensity-pay',
    title: 'Customer Propensity to pay',
    description: 'Predicts customers likely to repay, enabling optimized debt collection.',
    vertical: 'Utilities',
    modelType: 'Classification',
    enabled: true,
    route: '/utility-propensity'
  },
  {
    id: 'lifecycle-analytics',
    title: 'Customer Lifecycle analytics',
    description: 'Analytics across acquisition, servicing, retention and collections.',
    vertical: 'Media',
    modelType: 'Clustering',
    enabled: false
  },
  {
    id: 'document-fraud',
    title: 'Document Fraud detection',
    description: 'Detects student enrollment document tampering using PDF residual data.',
    vertical: 'EdTech',
    modelType: 'Computer Vision',
    enabled: false
  },
  {
    id: 'claims-late-payment',
    title: 'Claims Late Payment Propensity',
    description: 'Predicts claims likely delayed, triggering state and federal interest payments.',
    vertical: 'Payer',
    modelType: 'Classification',
    enabled: false
  }
];

export const verticals = ['Home', 'Provider', 'BFS', 'Payer', 'Utilities', 'Telecom', 'EdTech', 'Media'];

export const modelTypes = ['All Models', 'Classification', 'Clustering', 'Computer Vision', 'Forecasting'];

export default marketplaceCards;
