<template>
  <div>
   <div>
     <h3>1099</h3>
     <label>Salary 
       <input v-model="salary" type="text" />
     </label><br>
     <label>Business Deductions 
       <input v-model="deductions" type="text" />
     </label><br>
   </div>
    <div> 
      <span>Combined Income: {{combinedIncome}}</span><br>
      <span>Standard Deduction: {{standardDeduction}}</span><br>
      <span>Business Deductions: {{deductions}}</span><br>
      <span>Total Deductions: {{totalDeductions}}</span><br>
      <span>Taxable Income: {{taxableIncome}}</span><br>
      <span>Payroll Taxes: {{payrollTaxes}}</span><br>
      <span>Income Taxes: {{incomeTaxes}}</span><br>
      <span>Credits: {{credits}}</span><br>
      <span>Income Tax Owed: {{incomeTaxesOwed}}</span><br>
      <span>Effective Tax Rate: {{effectiveTaxRate}}</span><br>
      <font color="red">Total Taxes: {{totalTaxes}}</font><br>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
const { log } = console

export default {
  name: 'ten99',
  data() {
    return {
      salary: 0,
      deductions: 0,
      standardDeduction: 24400,
    }
  },
  props: {
    spouseIncome: Number,
    numChildren: Number,
  },
  computed: {
    childCredit() {
      return Number(this.numChildren) * 2000
    },
    totalDeductions() {
      return this.standardDeduction + Number(this.deductions)
    },
    combinedIncome () {
      return Number(this.salary) + this.spouseIncome
    },
    //marginalTaxRate () {
    //  return getTaxRate(this.combinedIncome)
    //},
    incomeTaxes () {
      return getIncomeTaxes(this.taxableIncome)
    },
    credits () {
      return this.numChildren * 2000
    },
    netIncome () {
      return Number(this.salary) - Number(this.deductions)
    },
    payrollTaxes () {
      return (this.netIncome * 0.153) + (this.spouseIncome * 0.0765) 
    },
    taxableIncome () {
      const ti = this.combinedIncome - this.totalDeductions
      return ti < 0 ? 0 : ti 
    },
    incomeTaxesOwed () {
      const taxOwed = this.incomeTaxes - this.credits 
      return taxOwed < 0 ? 0 : taxOwed 
    },
    effectiveTaxRate () {
      return this.totalTaxes / this.combinedIncome
    },
    totalTaxes () {
      return this.incomeTaxesOwed + this.payrollTaxes 
    },
  },
  methods: {}
}

function getIncomeTaxes(i) {
  const income = Number(i)
  let tax = 0
  const l1Amount = 9700;
  const l1Rate = .1
  const l1Taxes = l1Amount*l1Rate;
  if (income < l1Amount) {
    return income*l1Rate;
  } else tax += l1Taxes 

  const l2Amount = 39475;
  const l2Rate = .12
  const l2Taxes = (l2Amount-l1Amount)*l2Rate;
  if (income < l2Amount) {
    return tax += (income - l1Amount) * l2Rate;
  } else tax =+ l2Taxes

  const l3Amount = 84200;
  const l3Rate = .22
  const l3Taxes = (l3Amount-l2Amount)*l3Rate;
  if (income < l3Amount) {
    return tax += (income - l2Amount) * l3Rate;
  } else tax += l3Taxes
  
  const l4Amount = 160725;
  const l4Rate = .24;
  const l4Taxes = (l4Amount-l3Amount)*l4Rate;
  if (income < l4Amount) {
    return tax += (income - l3Amount) * l3Rate;
  } else tax += l4Taxes

  const l5Amount = 204100;
  const l5Rate = .32;
  const l5Taxes = (l5Amount-l4Amount)*l5Rate;
  if (income < l5Amount) {
    return tax == (income - l4Amount) * l5Rate;
  } else tax += l5Taxes

  const l6Amount = 510300;
  const l6Rate = .35;
  const l6Taxes = (l6Amount-l5Amount)*l6Rate;
  if (income < l6Amount) {
    return tax += (income - l5Amount) * l6Rate;
  } else tax += l6Taxes

  const l7Amount = 510301;
  const l7Rate = .37;
  const l7Taxes = (income-l6Amount)*l7Rate; 
  return tax += l7Taxes;
}

function getTaxRate(i) {
  const income = Number(i)
  const l1 = 9700;
  if (income < l1) {
    return `10%`;
  }
  const l2 = 39475;
  if (income < l2) {
    return `12%`;
  }
  const l3 = 84200;
  if (income < l3) {
    return `22%`;
  }
  const l4 = 160725;
  if (income < l4) {
    return `24%`;
  }
  const l5 = 204100;
  if (income < l5) {
    return `32%`;
  }
  const l6 = 510300;
  if (income < l6) {
    return `35%`;
  }
  const l7 = 510301;
  return `37%`;
}
</script>
<style scoped>
  .container {
    display: grid;
    grid-template: 1fr / 1fr 1fr 1fr;
  }

</style>
