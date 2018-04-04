export class CriteriaDef {
    static CRITERIA_DEF: CriteriaDefinination[] =
    [
        {
          id: 'quoteid',
          name: 'Quote id(s)'
        },
        {
          id: 'country',
          name: 'Country',
        },
        {
          id: 'approverintranetid',
          name: 'Approver'
        },
        {
          id: 'currentapproverinternetid',
          name: 'Current approver'
        },
        {
          id: 'currentreviewerinternetid',
          name: 'Current reviewer'
        },
        {
          id: 'pastreviewerinternetid',
          name: 'Past reviewer',
        },
        {
          id: 'bidtype',
          name: 'Bid type',
        },
        {
          id: 'bpeucustomernumber',
          name: 'BP end user customer number',
        },
        {
          id: 'bpceid',
          name: 'BP end user enterprise number /BP CEID',
        },
        {
          id: 'brand',
          name: 'Brand',
        },
        {
          id: 'revenuecode',
          name: 'Revenue division code',
        },
        {
          id: 'leadingbrand',
          name: 'Leading brand'
        },
        {
          id: 'eucustomercmrnumber',
          name: 'End user customer CMR number'
        },
        {
          id: 'eucustomername',
          name: 'End user customer name'
        },
        {
          id: 'eucustomerenterprisenumber',
          name: 'End user enterprise number'
        },
        {
          id: 'ccmsnb',
          name: 'Non legacy customer id'
        },
        {
          id: 'quotemanagerid',
          name: 'Quote manager email id'
        },
        {
          id: 'quotestatus',
          name: 'Quote status'
        },
        {
          id: 'bpreasoncode',
          name: 'BP reason code'
        },
        {
          id: 'approvalcode',
          name: 'Approval code'
        },
        {
          id: 'regnumber',
          name: 'Registration number'
        },
        {
          id: 'sp2companyname',
          name: 'Tier2 name'
        },
        {
          id: 'sp2ceid',
          name: 'SP2 CEID'

        },
        {
          id: 'typemodelfeature',
          name: 'Type/model/feature'

        },
        {
          id: 'channelidcode',
          name: 'Channel'

        },
        {
          id: 'ooname',
          name: 'OO name'

        },
        {
          id: 'oointranetid',
          name: 'OO email id'

        },
        {
          id: 'opportunityid',
          name: 'Opportunity id'

        },
        {
          id: 'quotecreationdate',
          name: 'Quote creation date'

        },
        {
          id: 'quotesubmissiondate',
          name: 'Quote submission date'

        },
        {
          id: 'approvalexpirationdate',
          name: 'Approval expiration date'

        },
        {
          id: 'legacyquoteid',
          name: 'Legacy quote id'

        },
        {
          id: 'quotetype',
          name: 'Quote type'

        },
        {
          id: 'bpcompanyname',
          name: 'Tier1 name'

        },
        {
          id: 'quoteowner',
          name: 'Quote owner'

        },
        {
          id: 'description',
          name: 'Quote title'

        },
        {
          id: 'specialbidcode',
          name: 'Special Bid Code'
        },
        {
          id: 'approvaldate',
          name: 'Approval date'
        }
      ]
}

export interface CriteriaDefinination {
    id: string;
    name: string;
}
