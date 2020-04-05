import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filingFrequency",
})
export class FilingFrequencyPipe implements PipeTransform {
  transform(value: string): any {
    switch (value) {
      case "A":
        return "Administratively terminated";
      case "D":
        return "Debt";
      case "M":
        return "Monthly filer";
      case "Q":
        return "Quarterly filer";
      case "T":
        return "Terminated";
      case "W":
        return "Waived";
      default:
        return "Undefined";
    }
  }
}
