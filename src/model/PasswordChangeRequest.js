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
 * The PasswordChangeRequest model module.
 * @module model/PasswordChangeRequest
 * @version 0.1.0
 */
export class PasswordChangeRequest {
  /**
   * Constructs a new <code>PasswordChangeRequest</code>.
   * Sent from user to server. Server sends email to registered email address with secret code.
   * @alias module:model/PasswordChangeRequest
   * @class
   * @param email {String} 
   */
  constructor(email) {
    this.email = email;
  }

  /**
   * Constructs a <code>PasswordChangeRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PasswordChangeRequest} obj Optional instance to populate.
   * @return {module:model/PasswordChangeRequest} The populated <code>PasswordChangeRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PasswordChangeRequest();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} email
 */
PasswordChangeRequest.prototype.email = undefined;

