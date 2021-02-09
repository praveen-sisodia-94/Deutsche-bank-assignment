export default class ValidationMapper {

  static required = (value,key) => (value && !value.toString().trim() === "") || value === 0 ? undefined : key + ' is required';

  static getValidatioNFailMessageForRequiredAndSQLInjection = (value, key) => {

  return this.required(value,key) ? key+' is required.': ValidationMapper.checkForSQLInjectionInternal(value) ? undefined : 'The data entered does not seem to be appropriate.';

  }


  static checkForSQLInjectionInternal = (value) => {
    let val = value ? value.toString().toLowerCase() : '';
 
    if (value && (val.includes('select * from') ||
      val.includes('set =') ||
      val.includes('update') ||
      val.includes('insert') ||
      val.includes('delete') ||
      val.includes('grant') ||
      val.includes('--') ||
      val.includes('revoke'))) {
      return false;
    }
    else {
      return (value && /[#!$%^&*()|~=`{}:";<>?]+$/i.test(val)) ? false : true;
    }
  };

}