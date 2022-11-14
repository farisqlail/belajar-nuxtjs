<template>
  <div>
    <Layouts />

    <div class="container">
      <section id="hero">
        <span class="tag"><b>The Team</b></span>
        <p class="title">
          Meet our team of experts in <br />
          marketing and automation.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          laborum velit <br />
          laudantium error culpa eos ullam, consequuntur obcaecati dolores non?
        </p>
      </section>

      <section id="employee">
        <div class="row">
          <div class="col-md-4">
            <div class="card card-employees">
              <img
                src="https://www.shutterstock.com/image-photo/image-young-asian-woman-company-600w-2122700972.jpg"
                class="img-fluid card-image-employee"
                alt=""
              />
              <div class="card-body">
                <span class="card-name-employee">Sofyanda Atmaja, S.Pd</span>
                <br />
                <small class="card-role-name mt-3"> Kepala Sekolah</small>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-employees">
              <img
                src="https://www.shutterstock.com/image-photo/image-young-asian-woman-company-600w-2122700972.jpg"
                class="img-fluid card-image-employee"
                alt=""
              />
              <div class="card-body">
                <span class="card-name-employee">Sofyanda Atmaja, S.Pd</span>
                <br />
                <small class="card-role-name mt-3"> Kepala Sekolah</small>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-employees">
              <img
                src="https://www.shutterstock.com/image-photo/image-young-asian-woman-company-600w-2122700972.jpg"
                class="card-img-top card-image-employee"
                alt=""
              />
              <div class="card-body">
                <span class="card-name-employee">Sofyanda Atmaja, S.Pd</span>
                <br />
                <small class="card-role-name mt-3"> Kepala Sekolah</small>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <div class="card card-employees">
              <img
                src="https://www.shutterstock.com/image-photo/image-young-asian-woman-company-600w-2122700972.jpg"
                class="img-fluid card-image-employee"
                alt=""
              />
              <div class="card-body">
                <span class="card-name-employee">Sofyanda Atmaja, S.Pd</span>
                <br />
                <small class="card-role-name mt-3"> Kepala Sekolah</small>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-employees">
              <img
                src="https://www.shutterstock.com/image-photo/image-young-asian-woman-company-600w-2122700972.jpg"
                class="img-fluid card-image-employee"
                alt=""
              />
              <div class="card-body">
                <span class="card-name-employee">Sofyanda Atmaja, S.Pd</span>
                <br />
                <small class="card-role-name mt-3"> Kepala Sekolah</small>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-employees">
              <img
                src="https://www.shutterstock.com/image-photo/image-young-asian-woman-company-600w-2122700972.jpg"
                class="card-img-top card-image-employee"
                alt=""
              />
              <div class="card-body">
                <span class="card-name-employee">Sofyanda Atmaja, S.Pd</span>
                <br />
                <small class="card-role-name mt-3"> Kepala Sekolah</small>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <div class="card card-employees">
              <img
                src="https://www.shutterstock.com/image-photo/image-young-asian-woman-company-600w-2122700972.jpg"
                class="img-fluid card-image-employee"
                alt=""
              />
              <div class="card-body">
                <span class="card-name-employee">Sofyanda Atmaja, S.Pd</span>
                <br />
                <small class="card-role-name mt-3"> Kepala Sekolah</small>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-employees">
              <img
                src="https://www.shutterstock.com/image-photo/image-young-asian-woman-company-600w-2122700972.jpg"
                class="img-fluid card-image-employee"
                alt=""
              />
              <div class="card-body">
                <span class="card-name-employee">Sofyanda Atmaja, S.Pd</span>
                <br />
                <small class="card-role-name mt-3"> Kepala Sekolah</small>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-employees">
              <img
                src="https://www.shutterstock.com/image-photo/image-young-asian-woman-company-600w-2122700972.jpg"
                class="card-img-top card-image-employee"
                alt=""
              />
              <div class="card-body">
                <span class="card-name-employee">Sofyanda Atmaja, S.Pd</span>
                <br />
                <small class="card-role-name mt-3"> Kepala Sekolah</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Layouts from "../../components/Layouts.vue";

export default {
  components: { Layouts },
  head() {
    return {
      title: "Career Page",
    };
  },
  data() {
    return {
      posts: {},
    };
  },
};
</script>

<style>
#hero {
  margin-top: 100px;
}

.title {
  font-size: 30px;
  font-weight: 600;
}
#employee {
  margin-top: 100px;
}
#employee .card-employees {
  border: none;
}
#employee .card .card-image-employee {
  border-radius: 10px 10px 0px 0px;
}
#employee .card .card-body .card-name-employee {
  font-size: 18px;
  font-weight: 600;
}
#employee .card .card-body .card-role-name {
  font-style: italic;
}
</style>