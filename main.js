var v_main = new Vue({
  el: '#main',
  vuetify: new Vuetify(),

  data: function() {
    return {
      headers: [
        { text:'No.', value:'no', width:'5rem' },
        { text:'Item1', value:'item1', width:'10rem' },
        { text:'Item2', value:'item2', width:'10rem' },
        { text:'', value:'', width:'3.5rem' }, // Btn 1
      ],
      items: [
        { no: 1, item1:'item1', item2:'item2'},
        { no: 2, item1:'item1', item2:'item2'},
        { no: 3, item1:'item1', item2:'item2'},
        { no: 4, item1:'item1', item2:'item2'},
        { no: 5, item1:'item1', item2:'item2'},
      ],

      // Backup Input Text
      tmp_input:{
        item1: "",
        item2: "",
      },

      // Form Valid Status
      valids: {
        item1: true,
        item2: true
      },
      // Input Text Rules
      rules: {
        required: val => !!val || 'input is requierd!',
        max5: val => val.length <= 5 || 'Max 5 characters!',
        max10: val => val.length <= 10 || 'Max 10 characters!',
      },

    }
  },

  computed: {
  },

  watch: {
    // Text Input on Edit Dialog
    "valids.item1": function(e) {
      console.log("valids.item1: "+ e);
      this.eDialogSaveBtnEnable(e);
    },
    "valids.item2": function(e) {
      console.log("valids.item2: "+ e);
      this.eDialogSaveBtnEnable(e);
    },

  },

  methods: {
    // custom v-edit-dialog
    eDialogSaveBtnEnable(enable) {
      let btn = document.querySelector(".menuable__content__active .v-small-dialog__actions > button:nth-child(2)");
      if (!btn) return;
    
      if (enable) {
        btn.classList.remove("disable");
      }else{
        btn.classList.add("disable");
      }
    },

  },

  updated() {
    console.log("main vue updated.");
  },

  mounted() {
    console.log("main vue mounted.");
  },
})