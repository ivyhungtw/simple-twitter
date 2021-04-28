<template>
  <form @submit.stop.prevent="handleSubmit">
    <div
      class="modal fade"
      id="edit-user-modal"
      tabindex="1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              id="modal-close"
              data-dismiss="modal"
            >
              x
            </button>

            <h5 class="modal-title" id="edit-user-title">編輯個人資料</h5>
            <button type="submit" class="storage">儲存</button>
          </div>
          <div class="modal-body" id="edit-user-body">
            <div class="row">
              <div id="edit-user-cover-group">
                <img
                  :src="user.cover | emptyImageFilter"
                  id="edit-user-cover"
                />

                <div id="edit-user-cover-icon">
                  <button id="camera-icon">
                    <i class="fas fa-fw fa-camera" style="color: white"></i>
                  </button>
                  <button id="cross-icon">
                    <i class="fas fa-fw fa-times" style="color: white"></i>
                  </button>
                </div>
              </div>
              <div id="edit-user-avatar-group">
                <img
                  :src="user.avatar | emptyImageFilter"
                  id="edit-user-avatar"
                />
                <button id="avatar-camera-icon">
                  <i class="fas fa-fw fa-camera"></i>
                </button>
              </div>
              <div class="form-name form-label-group mb-2">
                <label for="name">名稱</label>
                <input
                  id="name"
                  v-model="user.name"
                  name="name"
                  type="text"
                  class="form-control"
                  autocomplete="username"
                  required
                  autofocus
                />
                <p>{{ user.name.length }}/50</p>
              </div>

              <div class="form-introduction form-label-group mb-2">
                <label for="introduction">自我介紹</label>
                <textarea
                  id="introduction"
                  v-model="user.introduction"
                  name="introduction"
                  type="text"
                  class="form-control"
                  autocomplete="userintroduction"
                  required
                  autofocus
                />
                <p>{{ user.introduction.length }}/160</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { emptyImageFilter } from "../../utils/mixins";

export default {
  mixins: [emptyImageFilter],
  name: "UserEditModal",
};
</script>

<style scoped>
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