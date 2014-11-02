See original readme from Josh Mandel below

Distress screening form for cancer patients:
http://www.nccn.org/patients/resources/life_with_cancer/pdf/nccn_distress_thermometer.pdf

Json for FHIR questionnaire resource:
https://github.com/pavelone/sdc-fhir-demo/blob/lungcancer/app/fixtures/Distress-Thermometer.json

The form for capturing data:
http://pavelone.github.io/sdc-fhir-demo/index.html#/view?q=fixtures%2FDistress-Thermometer.json

Original readme:

## SDC --> FHIR Questionnaire prototype

#### Demo online: [birth details questionnaire](http://joshuamandel.com/sdc-fhir-demo/app/#/view/example) | [event reporting example](http://joshuamandel.com/sdc-fhir-demo/app/#/view/converted)


This is a *very rough take* on the following process:

1. Ahead of time, transition SDC XML definitions into [FHIR
   Questionnaire](http://hl7.org/implement/standards/fhir/questionnaire.html)
instances.


2. Render FHIR questionnaires as web forms with client-side JavaScript


---

### To convert a file

```
$ python sdc_to_fhir.py   app/fixtures/sdc_example.xml  > app/fixtures/converted.json
```

### To run the app

Host the "app" directory with a web server of your choice (or `grunt serve` if
you're using nodejs). Then visit `/index.html#/view/:form` (where `:form` is
the name of an example FHIR Questionnaire JSON file that exists in `fixtures`

For instance:

* http://localhost:9000/index.html#/view/example
* http://localhost:9000/index.html#/view/converted

