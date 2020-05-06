// store the data for the table in a JSON array.
var loginlists = [
    {
        "login": "Lakshmi",
        "name": "Lakshmi Sivaraman",
        "emailid": "lakshmi@abc.com"
    },
    {
        "login": "Ajay",
        "name": "Ajay Gupta",
        "emailid": "ajaya@abc.com"
    },
    {
        "login": "Shridhar",
        "name": "Sreedharan Nair",
        "emailid": "shridhar@abc.com"
    },
    {
        "login": "Lata",
        "name": "Lata Mangesh",
        "emailid": "lata@abc.com"
    },
    {
        "login": "Ram",
        "name": "Ram Kumar",
        "emailid": "ram@abc.com"
    }
]

var app = angular.module("myapp", []);

app.component("ttable", {
    templateUrl: 'ttable.html',
    controller: function spcontroller($http) {
        this.newrow = {};    // init new row
        this.prevrow = {};  // store prev state before modifying
        this.editrowindex = -1;   // to store the index of row being edited
        this.rows = loginlists;
        $http.get('splist.json').then(function (response) {
            self.rows = response.data;
        });
        this.orderProp = "name";
        // delete row 
        this.deleterow = function (row, index) {
            this.rows.splice(this.rows.indexOf(row), 1);
        };
        // add row 
        this.addrow = function (newrow) {
            this.rows.push(newrow);
            this.newrow = {};
            this.editrowindex = -1;
        };
        // edit row
        this.editrow = function (row, index) {
            this.editrowindex = index;
            this.prevrow = angular.copy(this.rows[this.rows.indexOf(row)]);  // use element index and not the row index
        }
        // update row 
        this.updaterow = function (row, index) {
            // call to webservice
            this.editrowindex = -1;
            this.prevrow = {};
        }
        //revert row
        this.revertrow = function (row, index) {
            this.rows[this.rows.indexOf(row)] = angular.copy(this.prevrow);
            this.prevrow = {};
            this.editrowindex = -1;
        }
        // insert row
        this.insertrow = function (index) {
            this.editrowindex = index;
        }
        //ignore row
        this.ignorerow = function (index) {
            this.editrowindex = -1;
        }
    }

});