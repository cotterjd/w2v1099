<template>
  <div>
    <h3>W2</h3>
    <label>Salary 
      <input v-model="salary" type="text" />
    </label><br>
    <label>401K contribution 
      <input v-model="for01k" placeholder="%" type="text" />
    </label><br>
    <label>HSA contribution 
      <input v-model="hsa" placeholder="" type="text" />
    </label><br>
    <div> 
      <span>Combined Income: {{w2CombinedIncome}}</span><br>
      <span>Deductions: {{totalDeductions}}</span><br>
      <span>Taxable Income: {{w2TaxableIncome}}</span><br>
      <span>Payroll Taxes: {{w2PayrollTaxes}}</span><br>
      <span>Income Taxes: {{w2IncomeTaxes}}</span><br>
      <span>Credits: {{w2Credits}}</span><br>
      <span>Income Tax Owed: {{w2IncomeTaxesOwed}}</span><br>
      <span>Effective Tax Rate: {{w2EffectiveTaxRate}}</span><br>
      <font color="red">Total Taxes: {{w2TotalTaxes}}</font><br>
      <span>Net Income After Taxes: {{netIncomeAfterTaxes}}</span><br>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
const { log } = console

export default {
  name: 'w2',
  data() {
    return {
      salary: 0,
      for01k: 0,
      standardDeduction: 24400,
      hsa: 0,
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
    w2CombinedIncome () {
      return Number(this.salary) + this.spouseIncome
    },
    //w2MarginalTaxRate () {
    //  return getTaxRate(this.w2CombinedIncome)
    //},
    w2IncomeTaxes () {
      return getIncomeTaxes(this.w2TaxableIncome)
    },
    w2Credits () {
      return this.numChildren * 2000
    },
    w2PayrollTaxes () {
      const payrollCap = 118500
      const getPayrollEligibleIncome = income => income > payrollCap ? payrollCap : income 
      const spousePayrollEligableIncome = getPayrollEligibleIncome(this.spouseIncome)
      const payrollEligibleIncome = getPayrollEligibleIncome(Number(this.salary)) + spousePayrollEligableIncome
      return payrollEligibleIncome * 0.0765 
    },
    totalDeductions () {
      const f01k = Number(this.for01k)
      const f01kPerc = f01k/100
      const f01kCont = f01kPerc * Number(this.salary)
      const hsa = Number(this.hsa)
      return f01kCont + hsa + this.standardDeduction
    },
    w2TaxableIncome () {
      const taxableIncome = this.w2CombinedIncome - this.totalDeductions
      return taxableIncome < 0 ? 0 : taxableIncome 
    },
    w2IncomeTaxesOwed () {
      const taxOwed = this.w2IncomeTaxes - this.w2Credits 
      return taxOwed < 0 ? 0 : taxOwed 
    },
    w2EffectiveTaxRate () {
      return this.w2TotalTaxes / this.w2CombinedIncome
    },
    w2TotalTaxes () {
      return this.w2IncomeTaxesOwed + this.w2PayrollTaxes 
    },
    netIncomeAfterTaxes () {
      return this.w2CombinedIncome - this.w2TotalTaxes 
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
