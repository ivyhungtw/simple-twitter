<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="edit-user-modal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { emptyImageFilter } from "../../utils/mixins";

export default {
  // mixins: [emptyImageFilter],
  name: "UserEditModal",
};
</script>

<style scoped>
.modal-backdrop {
  z-index: 1040 !important;
}
.modal-dialog {
  margin: 2px auto;
  z-index: 1100 !important;
}

/* Modal */
/* form {
  margin: 0;
  padding: 0;
}

#edit-user-modal {
  position: absolute;
  top: -26px;
  left: 40px;
  width: 596px;
  height: 750px;
}

.modal-content {
  border-radius: 14px;
  width: 100%;
  height: 660px;
}

.modal-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 0;
}

#modal-close {
  width: 26px;
  height: 30px;
  line-height: 20px;
  margin: 0;
  padding: 0 0 5px 0;
  color: #ff6600;
  font-size: 25px;
  margin: 5px 30px 5px 10px;
}

#edit-user-title {
  margin: 0;
  padding: 0;
  font-weight: bolder;
  margin-right: 340px;
}

.modal-content .modal-header .storage {
  width: 55px;
  height: 28px;
  font-weight: 900;
  color: white;
  background-color: #ff6600;
  border-radius: 100px;
  border: none;
}

#edit-user-body {
  width: 100%;
  margin: 0;
  padding: 0;
}

#edit-user-cover-group {
  margin: 0;
  padding: 0;
  width: 100%;
}

#edit-user-cover-group img {
  width: 100%;
  height: 200px;
  background-size: cover;
  object-fit: cover;
  margin: 0;
  padding: 0;
}

#edit-user-cover-icon {
  position: absolute;
  top: 90px;
  left: 250px;
  display: flex;
}

#camera-icon,
#cross-icon {
  width: 35px;
  height: 35px;
  text-align: center;
  color: white;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  background-color: white;
  font-size: 20px;
}

#camera-icon {
  margin-right: 40px;
}

#edit-user-avatar-group img {
  position: absolute;
  left: 14px;
  top: 140px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-size: cover;
  object-fit: cover;
  border: 5px solid white;
}

#avatar-camera-icon {
  position: absolute;
  top: 180px;
  left: 60px;
  width: 35px;
  height: 35px;
  text-align: center;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  font-size: 20px;
}

.form-name,
.form-introduction {
  width: 570px;
  height: 100px;
  margin: 70px 10px 0 10px;
  padding: 0;
  color: #657786;
  font-weight: 700;
}

.form-name label,
.form-introduction label {
  padding-left: 10px;
  color: gray;
}

input {
  height: 24px;
  border: none;
  padding-bottom: 8px;
  border-radius: 0;
  font-weight: 900;
  background-color: #f5f8fa;
  border-bottom: 3px solid #657786;
}

.form-introduction {
  margin: 0 10px 30px 10px;
}

.form-introduction label {
  height: 20px;
}

.form-introduction textarea {
  height: 130px;
  border: none;
  border-radius: 0;
  font-weight: 900;
  resize: none;
  padding: 0 10px;
  background-color: #f5f8fa;
  border-bottom: 3px solid #657786;
}

.form-name p,
.form-introduction p {
  text-align: end;
} */
</style>