import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "formType",
})
export class FormTypePipe implements PipeTransform {
  private formTypes: object = {
    F1: "Statement of Organization",
    F1M: "Notification of Multicandidate Status",
    F2: "Statement of Candidacy",
    F3: "Report of Receipts and Disbursements for an Authorized Committee",
    F3P:
      "Report of Receipts and Disbursements by an Authorized Committee of a Candidate for The Office of President or Vice President",
    F3L:
      "Report of Contributions Bundled by Lobbyists/Registrants and Lobbyist/Registrant PACs",
    F3X:
      "Report of Receipts and Disbursements for other than an Authorized Committee",
    F4:
      "Report of Receipts and Disbursements for a Committee or Organization Supporting a Nomination Convention",
    F5: "Report of Independent Expenditures Made and Contributions Received",
    F6: "48 Hour Notice of Contributions/Loans Received",
    F7:
      "Report of Communication Costs by Corporations and Membership Organizations",
    F8: "Debt Settlement Plan",
    F9: "24 Hour Notice of Disbursements for Electioneering Communications",
    F13: "Report of Donations Accepted for Inaugural Committee",
    F99: "Miscellaneous Text",
    FRQ: "Request for Additional Information",
  };

  transform(value: any): string {
    return this.formTypes[value];
  }
}
