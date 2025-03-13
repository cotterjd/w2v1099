<template>
  <div>
    <label>Spouse Salary 
      <input v-model="spouseSalary" type="text" />
    </label><br>
    <label># Children 
      <input v-model="numChildren" type="text" />
    </label><br>
    <div class="container">
      <w2-taxes :numChildren="numberOfChildren" :spouseIncome="spouseIncome" />
      <ten99-taxes :numChildren="numberOfChildren" :spouseIncome="spouseIncome" />
      <corp-taxes :numChildren="numberOfChildren" :spouseIncome="spouseIncome" />
      <side-biz :numChildren="numberOfChildren" :spouseIncome="spouseIncome" />
      <llc-taxes :numChildren="numberOfChildren" :spouseIncome="spouseIncome" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import w2Taxes from './W2.vue'
import ten99Taxes from './Ten99.vue'
import corpTaxes from './Corp.vue'
import llcTaxes from './LLC.vue'
import sideBiz from './SideBiz.vue'
const { log } = console


export default {
  name: 'w2vs1099vscorp',
  components: {
    w2Taxes,
    ten99Taxes,
    corpTaxes,
    llcTaxes,
    sideBiz,
  },
  data() {
    return {
      spouseSalary: 0,
      numChildren: 0,
      corpData: {
        revenue: 0,
        salary: 0,
        deductions: 0,
      },
      w2Taxes: null,
      ten99Taxes: null,
      corpTaxes: null,
      standardDeduction: 24400,
    }
  },
  props: {},
  computed: {
    childCredit() {
      return this.numChildren * 2000
    },
    spouseIncome() {
      return Number(this.spouseSalary)
    },
    numberOfChildren () {
      return Number(this.numChildren)
    },
  },
  methods: {
    calcCorp() {
      const personalTax = this.calcW2Taxes(this.corpData.salary)
      const revenue = Number(this.corpData.revenue)
      const salary = Number(this.corpData.salary)
      const deductions = Number(this.corpData.deductions)
      const netRevenue = revenue - deductions
      const corpTaxableIncome = (netRevenue - salary) * .8
      const corpIncomeTaxes = corpTaxableIncome * .21
      this.corpTaxes = corpIncomeTaxes + personalTax + salary * 0.765
    },
    calcW2Taxes (salary) {
      const income = Number(salary)
      const w2TaxableIncome = income + this.spouseIncome - this.standardDeduction 
      return getIncomeTaxes(w2TaxableIncome) - this.childCredit + income * 0.0765  
    }
  }
}

function getIncomeTaxes(i) {
  const income = Number(i)
  const l1 = 9700;
  const l1Taxes = l1*.1;
  if (income < l1) {
    return l1Taxes;
  }
  const l2 = 39475;
  const l2Taxes = (l2-l1)*.12;
  if (income < l2) {
    return l2Taxes;
  }
  const l3 = 84200;
  const l3Taxes = (l3-l2)*.22;
  if (income < l3) {
    return l3Taxes;
  }
  const l4 = 160725;
  const l4Taxes = (l4-l3)*.24;
  if (income < l4) {
    return l4Taxes;
  }
  const l5 = 204100;
  const l5Taxes = (l5-l4)*.32;
  if (income < l5) {
    return l5Taxes;
  }
  const l6 = 510300;
  const l6Taxes = (l6-l5)*.35;
  if (income < l6) {
    return l6Taxes;
  }
  const l7 = 510301;
  const l7Taxes = (income-l6)*.37; 
  return l7Taxes;
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
