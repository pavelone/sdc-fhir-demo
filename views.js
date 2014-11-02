angular.module('sdcApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/group.html',
    "<div ng-class=\"{g: !top}\">\n" +
    "  <h4 ng-if=\"!top\">\n" +
    "    {{\n" +
    "      group.header || \n" +
    "      group.text ||\n" +
    "      group.name.text ||\n" +
    "      group.name.coding[0].display ||\n" +
    "      group.name.coding[0].code\n" +
    "    }}\n" +
    "    </h4>\n" +
    "  <question ng-repeat=\"question in group.question\"/>\n" +
    "  <group ng-repeat=\"group in group.group\"/>\n" +
    "</div>\n"
  );


  $templateCache.put('/main.html',
    "<div class=\"row header\">\n" +
    "  <h4 class=\"text-muted pull-left\">{{questionnaire.group.header}}</h4>\n" +
    "  <h4 class=\"pull-right\">(FHIR+SDC demonstration)</h4>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-md-8\">\n" +
    "    <group top/>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-4\">\n" +
    "    <pre id=\"preview\">{{allAnswers() | json}}</pre>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"footer\">\n" +
    "  <p>// end structured data capture demo. Source at <a href=\"https://github.com/jmandel/sdc-fhir-demo\">github.com/jmandel/sdc-fhir-demo</a></p>\n" +
    "</div>\n"
  );


  $templateCache.put('/question.html',
    "<div class=\"q\" ng-controller=\"QuestionController\">\n" +
    "  <form role=\"form\">\n" +
    "    <div class=\"form-group\">\n" +
    "\n" +
    "      <!--label>\n" +
    "        {{\n" +
    "          question.text || \n" +
    "          question.name.text || \n" +
    "          question.name.coding[0].display || \n" +
    "          question.name.coding[0].code ||\n" +
    "          '(Nameless)'\n" +
    "         }}</label-->\n" +
    "\n" +
    "      <!--select multiple class=\"form-control\" \n" +
    "        ng-model=\"question.responses.choice\"\n" +
    "        ng-if=\"options.length>0 && multiple\">\n" +
    "        <option ng-repeat=\"o in options\" ng-value=\"o.code\">\n" +
    "        {{o.display}}\n" +
    "        </option>\n" +
    "      </select-->\n" +
    "      <div ng-if=\"options.length>0 && multiple\">\n" +
    "        <fs-form-for model=\"question\">\n" +
    "          <fieldset class=\"form-horizontal\">\n" +
    "            <strong>{{question.text}}</strong>\n" +
    "            <!--fs-input as=\"fs-multiselect\" name=\"responses.choice\" freetext=\"\" label=\"{{question.text}}\" items=\"o\">{{ item }}</fs-input-->\n" +
    "            <div fs-multiselect=\"\" ng-model=\"question.responses.choice\" items=\"options\">\n" +
    "              {{item.display}}\n" +
    "            </div>\n" +
    "          </fieldset>\n" +
    "        </fs-form-for>\n" +
    "      </div>\n" +
    "\n" +
    "      <!--select class=\"form-control\"\n" +
    "        ng-model=\"question.responses.choice\"\n" +
    "        ng-if=\"options.length>0 && !multiple\" >\n" +
    "        <option ng-repeat=\"o in options\" ng-value=\"o.code\">\n" +
    "        {{o.display}}\n" +
    "        </option>\n" +
    "      </select-->\n" +
    "\n" +
    "      <div ng-if=\"options.length>0 && !multiple\">\n" +
    "        <fs-form-for model=\"question\">\n" +
    "          <fieldset class=\"form-horizontal\">\n" +
    "            <strong>{{question.text}}</strong>\n" +
    "            <!--fs-input as=\"fs-multiselect\" name=\"responses.choice\" freetext=\"\" label=\"{{question.text}}\" items=\"o\">{{ item }}</fs-input-->\n" +
    "            <div fs-select=\"\" ng-model=\"question.responses.choice\" items=\"options\">\n" +
    "              {{item.display}}\n" +
    "            </div>\n" +
    "          </fieldset>\n" +
    "        </fs-form-for>\n" +
    "      </div>\n" +
    "\n" +
    "      <!--input type=\"{{inputType}}\" class=\"form-control\"\n" +
    "      ng-model=\"question.responses.text[0]\"\n" +
    "      ng-if=\"options.length==0 && !multiline\" /-->\n" +
    "      <div ng-if=\"options.length==0 && !multiline && (inputType=='text' || inputType=='number')\">\n" +
    "        <fs-form-for model=\"question\">\n" +
    "          <fieldset class=\"form-horizontal\">\n" +
    "            <fs-input as=\"text\" name=\"responses.text[0]\" required=\"\" label=\"{{question.text}}\"></fs-input>\n" +
    "          </fieldset>\n" +
    "        </fs-form-for>\n" +
    "      </div>\n" +
    "\n" +
    "      <div ng-if=\"options.length==0 && !multiline && inputType=='fs-date'\">\n" +
    "        <fs-form-for model=\"question\">\n" +
    "          <fieldset class=\"form-horizontal\">\n" +
    "            <fs-input as=\"fs-date\" name=\"responses.text[0]\" required=\"\" label=\"{{question.text}}\"></fs-input>\n" +
    "          </fieldset>\n" +
    "          </fs-form-for>\n" +
    "      </div>\n" +
    "\n" +
    "      <div ng-if=\"options.length==0 && multiline\">\n" +
    "      <strong>{{question.text}}</strong>\n" +
    "      <textarea class=\"form-control\" ng-model=\"question.responses.text[0]\"/>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "  </form>\n" +
    "  <group ng-repeat=\"group in question.group\" />\n" +
    "</div>\n" +
    "\n"
  );

}]);
