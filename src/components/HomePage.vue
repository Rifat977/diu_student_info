<template>
    <div class="container">

      <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div class="d-flex justify-content-center py-4">
                <a href="/" class="logo d-flex align-items-center w-auto">
                  <span class="d-lg-block">Smart Daffodil</span>
                </a>
              </div><!-- End Logo -->

              <div class="card mb-3">

                <div class="card-body">

                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">Enter Your Student Id</h5>
                    <p class="text-center small">View Student Information and CGPA</p>
                  </div>

                  <form class="row g-3 needs-validation" novalidate>

                    <div class="col-4">
                      <input type="number" v-model="semesterId" placeholder="221" class="form-control" required>
                    </div>
                    <div class="col-4">
                      <input type="number" v-model="departmentId" placeholder="35" class="form-control" required>
                    </div>
                    <div class="col-4">
                      <input type="number" v-model="studentId" placeholder="909" class="form-control" required>
                    </div>

                    <div class="col-12 mt-4">
                      <button v-on:click="handleStudentInfo" class="btn btn-primary w-100" type="button">Student Info</button>
                    </div>

                    <div class="col-12 mt-3">
                      <button v-on:click="handleCgpa" class="btn btn-primary w-100" type="button">CGPA</button>
                    </div>
                    
                  </form>

                </div>
              </div>


            </div>
          </div>
        </div>

      </section>

    </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'HomePage',
  data(){
    return{
      semesterId: '',
      departmentId: '',
      studentId: '',
    }
  },
  methods:{
    handleStudentInfo(){
      var ID = this.semesterId + '-' + this.departmentId + '-' + this.studentId;
      if(this.semesterId=='' || this.departmentId=='' || this.studentId==''){
        alert('Please provide your ID!')
      }else{
        this.$router.push({
         name: "Student",
         params: { studentId: ID }
        })
      }
    },
    handleCgpa(){
      var ID = this.semesterId + '-' + this.departmentId + '-' + this.studentId;
      if(this.semesterId=='' || this.departmentId=='' || this.studentId==''){
        alert('Please provide your ID!')
      }else{
         this.$router.push({
         name: "Cgpa",
         params: { studentId: ID }
        })
      }
    },
    
  }
}
</script>

