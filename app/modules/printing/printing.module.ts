import PrintingConfig from './printing.routes';
import PrintingController from './printing.controller';

angular.module('PGR2015.printing', [])
    .config(PrintingConfig)
    .controller('PrintingController', PrintingController);


