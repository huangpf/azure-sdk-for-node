// 
// Copyright (c) Microsoft and contributors.  All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// 
// See the License for the specific language governing permissions and
// limitations under the License.
// 

'use strict';
/* jshint latedef:false */
/* jshint camelcase:false */

/** @class 
  */
function JsonWebKeyEncryptionAlgorithms() {
}

JsonWebKeyEncryptionAlgorithms.RSAOAEP = 'RSA-OAEP';
JsonWebKeyEncryptionAlgorithms.RSA15 = 'RSA1_5';

/** @class 
  */
function JsonWebKeySignatureAlgorithms() { 
}

JsonWebKeySignatureAlgorithms.RS256 = 'RS256';
JsonWebKeySignatureAlgorithms.RS384 = 'RS384';
JsonWebKeySignatureAlgorithms.RS512 = 'RS512';
JsonWebKeySignatureAlgorithms.RS256 = 'RSNULL';

/** @class 
  */
function JsonWebKeyType() {
}

JsonWebKeyType.EC = 'EC';
JsonWebKeyType.RSA = 'RSA';
JsonWebKeyType.RSAHSM = 'RSA-HSM';
JsonWebKeyType.OCT = 'oct';

/** @class
  */
function JsonWebKey() {
  
  /** The key identifier.
    * @member {string}
    */
  this.kid = null;

  /** The key type. Typically is one of {@linkcode JsonWebKeyType} constants.
    * @member {string}
    */
  this.kty = null;

  /** An array describing the operations supported by this key.
    * @member {string[]}
    */        
  this.key_ops = null;
  
  /** Symmetric key material.
    * @member {Buffer}
    */        
  this.k = null;
  
  /** The RSA public modulus.
    * @member {Buffer}
    */        
  this.n = null;
  
  /** The RSA public exponent.
    * @member {Buffer}
    */        
  this.e = null;
  
  /** An RSA private key component.
    * @member {Buffer}
    */        
  this.d = null;
  
  /** An RSA private key component.
    * @member {Buffer}
    */        
  this.p = null;
  
  /** An RSA private key component.
    * @member {Buffer}
    */        
  this.q = null;
  
  /** An RSA private key component.
    * @member {Buffer}
    */        
  this.dp = null;
  
  /** An RSA private key component.
    * @member {Buffer}
    */        
  this.dq = null;
  
  /** An RSA private key component.
    * @member {Buffer}
    */        
  this.qi = null;
  
  /** HSM Token, used with "Bring Your Own Key".
    * @member {Buffer}
    */        
  this.key_hsm = null;

}

var exports = module.exports;

exports.JsonWebKeyEncryptionAlgorithms = JsonWebKeyEncryptionAlgorithms;
exports.JsonWebKeySignatureAlgorithms = JsonWebKeySignatureAlgorithms;
exports.JsonWebKeyType = JsonWebKeyType;
exports.JsonWebKey = JsonWebKey;
