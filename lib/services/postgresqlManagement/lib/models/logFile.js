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
 * Initializes a new instance of the LogFile class.
 * @constructor
 * Represents a log file.
 *
 * @member {string} [logFileName] Log file name.
 *
 * @member {number} [sizeInKB] Size of the log file.
 *
 * @member {date} [createdTime] Creation timestamp of the log file.
 *
 * @member {date} [lastModifiedTime] Last modified timestamp of the log file.
 *
 * @member {string} [logFileType] Type of the log file.
 *
 * @member {string} [url] The url to download the log file from.
 *
 */
class LogFile extends models['ProxyResource'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of LogFile
   *
   * @returns {object} metadata of LogFile
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LogFile',
      type: {
        name: 'Composite',
        className: 'LogFile',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          logFileName: {
            required: false,
            serializedName: 'properties.name',
            type: {
              name: 'String'
            }
          },
          sizeInKB: {
            required: false,
            serializedName: 'properties.sizeInKB',
            type: {
              name: 'Number'
            }
          },
          createdTime: {
            required: false,
            serializedName: 'properties.createdTime',
            type: {
              name: 'DateTime'
            }
          },
          lastModifiedTime: {
            required: false,
            serializedName: 'properties.lastModifiedTime',
            type: {
              name: 'DateTime'
            }
          },
          logFileType: {
            required: false,
            serializedName: 'properties.type',
            type: {
              name: 'String'
            }
          },
          url: {
            required: false,
            serializedName: 'properties.url',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = LogFile;