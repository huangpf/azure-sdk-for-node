/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the ServiceTierAdvisor class.
 * @constructor
 * Represents a Service Tier Advisor.
 *
 * @member {date} [observationPeriodStart] The observation period start
 * (ISO8601 format).
 *
 * @member {date} [observationPeriodEnd] The observation period start (ISO8601
 * format).
 *
 * @member {number} [activeTimeRatio] The activeTimeRatio for service tier
 * advisor.
 *
 * @member {number} [minDtu] Gets or sets minDtu for service tier advisor.
 *
 * @member {number} [avgDtu] Gets or sets avgDtu for service tier advisor.
 *
 * @member {number} [maxDtu] Gets or sets maxDtu for service tier advisor.
 *
 * @member {number} [maxSizeInGB] Gets or sets maxSizeInGB for service tier
 * advisor.
 *
 * @member {array} [serviceLevelObjectiveUsageMetrics] Gets or sets
 * serviceLevelObjectiveUsageMetrics for the service tier advisor.
 *
 * @member {string} [currentServiceLevelObjective] Gets or sets
 * currentServiceLevelObjective for service tier advisor.
 *
 * @member {uuid} [currentServiceLevelObjectiveId] Gets or sets
 * currentServiceLevelObjectiveId for service tier advisor.
 *
 * @member {string} [usageBasedRecommendationServiceLevelObjective] Gets or
 * sets usageBasedRecommendationServiceLevelObjective for service tier advisor.
 *
 * @member {uuid} [usageBasedRecommendationServiceLevelObjectiveId] Gets or
 * sets usageBasedRecommendationServiceLevelObjectiveId for service tier
 * advisor.
 *
 * @member {string} [databaseSizeBasedRecommendationServiceLevelObjective] Gets
 * or sets databaseSizeBasedRecommendationServiceLevelObjective for service
 * tier advisor.
 *
 * @member {uuid} [databaseSizeBasedRecommendationServiceLevelObjectiveId] Gets
 * or sets databaseSizeBasedRecommendationServiceLevelObjectiveId for service
 * tier advisor.
 *
 * @member {string} [disasterPlanBasedRecommendationServiceLevelObjective] Gets
 * or sets disasterPlanBasedRecommendationServiceLevelObjective for service
 * tier advisor.
 *
 * @member {uuid} [disasterPlanBasedRecommendationServiceLevelObjectiveId] Gets
 * or sets disasterPlanBasedRecommendationServiceLevelObjectiveId for service
 * tier advisor.
 *
 * @member {string} [overallRecommendationServiceLevelObjective] Gets or sets
 * overallRecommendationServiceLevelObjective for service tier advisor.
 *
 * @member {uuid} [overallRecommendationServiceLevelObjectiveId] Gets or sets
 * overallRecommendationServiceLevelObjectiveId for service tier advisor.
 *
 * @member {number} [confidence] Gets or sets confidence for service tier
 * advisor.
 *
 */
class ServiceTierAdvisor extends models['SubResource'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ServiceTierAdvisor
   *
   * @returns {object} metadata of ServiceTierAdvisor
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServiceTierAdvisor',
      type: {
        name: 'Composite',
        className: 'ServiceTierAdvisor',
        modelProperties: {
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          observationPeriodStart: {
            required: false,
            readOnly: true,
            serializedName: 'properties.observationPeriodStart',
            type: {
              name: 'DateTime'
            }
          },
          observationPeriodEnd: {
            required: false,
            readOnly: true,
            serializedName: 'properties.observationPeriodEnd',
            type: {
              name: 'DateTime'
            }
          },
          activeTimeRatio: {
            required: false,
            readOnly: true,
            serializedName: 'properties.activeTimeRatio',
            type: {
              name: 'Number'
            }
          },
          minDtu: {
            required: false,
            readOnly: true,
            serializedName: 'properties.minDtu',
            type: {
              name: 'Number'
            }
          },
          avgDtu: {
            required: false,
            readOnly: true,
            serializedName: 'properties.avgDtu',
            type: {
              name: 'Number'
            }
          },
          maxDtu: {
            required: false,
            readOnly: true,
            serializedName: 'properties.maxDtu',
            type: {
              name: 'Number'
            }
          },
          maxSizeInGB: {
            required: false,
            readOnly: true,
            serializedName: 'properties.maxSizeInGB',
            type: {
              name: 'Number'
            }
          },
          serviceLevelObjectiveUsageMetrics: {
            required: false,
            readOnly: true,
            serializedName: 'properties.serviceLevelObjectiveUsageMetrics',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'SloUsageMetricElementType',
                  type: {
                    name: 'Composite',
                    className: 'SloUsageMetric'
                  }
              }
            }
          },
          currentServiceLevelObjective: {
            required: false,
            readOnly: true,
            serializedName: 'properties.currentServiceLevelObjective',
            type: {
              name: 'String'
            }
          },
          currentServiceLevelObjectiveId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.currentServiceLevelObjectiveId',
            type: {
              name: 'String'
            }
          },
          usageBasedRecommendationServiceLevelObjective: {
            required: false,
            readOnly: true,
            serializedName: 'properties.usageBasedRecommendationServiceLevelObjective',
            type: {
              name: 'String'
            }
          },
          usageBasedRecommendationServiceLevelObjectiveId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.usageBasedRecommendationServiceLevelObjectiveId',
            type: {
              name: 'String'
            }
          },
          databaseSizeBasedRecommendationServiceLevelObjective: {
            required: false,
            readOnly: true,
            serializedName: 'properties.databaseSizeBasedRecommendationServiceLevelObjective',
            type: {
              name: 'String'
            }
          },
          databaseSizeBasedRecommendationServiceLevelObjectiveId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.databaseSizeBasedRecommendationServiceLevelObjectiveId',
            type: {
              name: 'String'
            }
          },
          disasterPlanBasedRecommendationServiceLevelObjective: {
            required: false,
            readOnly: true,
            serializedName: 'properties.disasterPlanBasedRecommendationServiceLevelObjective',
            type: {
              name: 'String'
            }
          },
          disasterPlanBasedRecommendationServiceLevelObjectiveId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.disasterPlanBasedRecommendationServiceLevelObjectiveId',
            type: {
              name: 'String'
            }
          },
          overallRecommendationServiceLevelObjective: {
            required: false,
            readOnly: true,
            serializedName: 'properties.overallRecommendationServiceLevelObjective',
            type: {
              name: 'String'
            }
          },
          overallRecommendationServiceLevelObjectiveId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.overallRecommendationServiceLevelObjectiveId',
            type: {
              name: 'String'
            }
          },
          confidence: {
            required: false,
            readOnly: true,
            serializedName: 'properties.confidence',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ServiceTierAdvisor;