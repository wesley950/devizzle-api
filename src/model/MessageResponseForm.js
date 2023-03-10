/*
 * Devizzle
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.41
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The MessageResponseForm model module.
 * @module model/MessageResponseForm
 * @version 0.1.0
 */
export class MessageResponseForm {
  /**
   * Constructs a new <code>MessageResponseForm</code>.
   * @alias module:model/MessageResponseForm
   * @class
   * @param respondingToId {Number} 
   * @param response {String} 
   */
  constructor(respondingToId, response) {
    this.respondingToId = respondingToId;
    this.response = response;
  }

  /**
   * Constructs a <code>MessageResponseForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessageResponseForm} obj Optional instance to populate.
   * @return {module:model/MessageResponseForm} The populated <code>MessageResponseForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MessageResponseForm();
      if (data.hasOwnProperty('responding_to_id'))
        obj.respondingToId = ApiClient.convertToType(data['responding_to_id'], 'Number');
      if (data.hasOwnProperty('response'))
        obj.response = ApiClient.convertToType(data['response'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} respondingToId
 */
MessageResponseForm.prototype.respondingToId = undefined;

/**
 * @member {String} response
 */
MessageResponseForm.prototype.response = undefined;

