/**
 * Flagr
 * Flagr is a feature flagging, A/B testing and dynamic configuration microservice
 *
 * OpenAPI spec version: 1.0.8
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/EvalContext', 'model/EvalDebugLog'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EvalContext'), require('./EvalDebugLog'));
  } else {
    // Browser globals (root is window)
    if (!root.Flagr) {
      root.Flagr = {};
    }
    root.Flagr.EvalResult = factory(root.Flagr.ApiClient, root.Flagr.EvalContext, root.Flagr.EvalDebugLog);
  }
}(this, function(ApiClient, EvalContext, EvalDebugLog) {
  'use strict';




  /**
   * The EvalResult model module.
   * @module model/EvalResult
   * @version 1.0.8
   */

  /**
   * Constructs a new <code>EvalResult</code>.
   * @alias module:model/EvalResult
   * @class
   * @param flagID {Number} 
   * @param segmentID {Number} 
   * @param variantID {Number} 
   * @param variantKey {String} 
   * @param variantAttachment {Object} 
   * @param evalContext {module:model/EvalContext} 
   * @param timestamp {String} 
   */
  var exports = function(flagID, segmentID, variantID, variantKey, variantAttachment, evalContext, timestamp) {
    var _this = this;

    _this['flagID'] = flagID;

    _this['segmentID'] = segmentID;
    _this['variantID'] = variantID;
    _this['variantKey'] = variantKey;
    _this['variantAttachment'] = variantAttachment;
    _this['evalContext'] = evalContext;
    _this['timestamp'] = timestamp;

  };

  /**
   * Constructs a <code>EvalResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EvalResult} obj Optional instance to populate.
   * @return {module:model/EvalResult} The populated <code>EvalResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('flagID')) {
        obj['flagID'] = ApiClient.convertToType(data['flagID'], 'Number');
      }
      if (data.hasOwnProperty('flagSnapshotID')) {
        obj['flagSnapshotID'] = ApiClient.convertToType(data['flagSnapshotID'], 'Number');
      }
      if (data.hasOwnProperty('segmentID')) {
        obj['segmentID'] = ApiClient.convertToType(data['segmentID'], 'Number');
      }
      if (data.hasOwnProperty('variantID')) {
        obj['variantID'] = ApiClient.convertToType(data['variantID'], 'Number');
      }
      if (data.hasOwnProperty('variantKey')) {
        obj['variantKey'] = ApiClient.convertToType(data['variantKey'], 'String');
      }
      if (data.hasOwnProperty('variantAttachment')) {
        obj['variantAttachment'] = ApiClient.convertToType(data['variantAttachment'], Object);
      }
      if (data.hasOwnProperty('evalContext')) {
        obj['evalContext'] = EvalContext.constructFromObject(data['evalContext']);
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'String');
      }
      if (data.hasOwnProperty('evalDebugLog')) {
        obj['evalDebugLog'] = EvalDebugLog.constructFromObject(data['evalDebugLog']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} flagID
   */
  exports.prototype['flagID'] = undefined;
  /**
   * @member {Number} flagSnapshotID
   */
  exports.prototype['flagSnapshotID'] = undefined;
  /**
   * @member {Number} segmentID
   */
  exports.prototype['segmentID'] = undefined;
  /**
   * @member {Number} variantID
   */
  exports.prototype['variantID'] = undefined;
  /**
   * @member {String} variantKey
   */
  exports.prototype['variantKey'] = undefined;
  /**
   * @member {Object} variantAttachment
   */
  exports.prototype['variantAttachment'] = undefined;
  /**
   * @member {module:model/EvalContext} evalContext
   */
  exports.prototype['evalContext'] = undefined;
  /**
   * @member {String} timestamp
   */
  exports.prototype['timestamp'] = undefined;
  /**
   * @member {module:model/EvalDebugLog} evalDebugLog
   */
  exports.prototype['evalDebugLog'] = undefined;



  return exports;
}));


