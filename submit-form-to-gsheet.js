$(document).ready(function() {
  var url =
    'https://script.google.com/macros/s/AKfycbz6Of7ZUYJseSNJPnByR6hSC7Dl-tSyAeRfP7D2MVxD_prh3T0t/exec';
  $form = $('form');
  var test = {
    'given-name': 'nom',
    'family-name': 'prenom',
    email: '',
    tel: '',
    'street-address': '',
    'postal-code': 'code_postal',
    'address-level2': 'ville',
    'address-level1': ''
  };

  $form.submit(function(e) {
    /*
    Dans leadpages
    les champs sont
    "{"given-name":"", Prénom
    "family-name":"", Nom
    "email":"",
    "tel":"",
    "street-address":"",
    "postal-code":"", Code postal
    "address-level2":"", City
    "address-level1":""}" -> State
     */
    /*
    js-state-field
    js-country-field
    js-country-code-phone-number

     */
    var mappings = {
      'given-name': 'prenom',
      'family-name': 'nom',
      email: 'email',
      tel: 'telephone'
    };
    var formJSON = {};
    $form.find('input[autocomplete]').each(function(index) {
      $this = $(this);
      formJSON[mappings[$this.attr('autocomplete')]] = $this.val();
    });

    $.ajax({
      url: url,
      method: 'GET',
      dataType: 'json',
      data: formJSON,
      success: function(data) {
        console.log(JSON.stringify(data));
      }
    });
  });
});
