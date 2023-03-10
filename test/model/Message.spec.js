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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Devizzle);
  }
}(this, function(expect, Devizzle) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Message', function() {
      beforeEach(function() {
        instance = new Devizzle.Message();
      });

      it('should create an instance of Message', function() {
        // TODO: update the code to test Message
        expect(instance).to.be.a(Devizzle.Message);
      });

      it('should have the property text (base name: "text")', function() {
        // TODO: update the code to test the property text
        expect(instance).to.have.property('text');
        // expect(instance.text).to.be(expectedValueLiteral);
      });

      it('should have the property sendDate (base name: "send_date")', function() {
        // TODO: update the code to test the property sendDate
        expect(instance).to.have.property('sendDate');
        // expect(instance.sendDate).to.be(expectedValueLiteral);
      });

      it('should have the property responses (base name: "responses")', function() {
        // TODO: update the code to test the property responses
        expect(instance).to.have.property('responses');
        // expect(instance.responses).to.be(expectedValueLiteral);
      });

    });
  });

}));