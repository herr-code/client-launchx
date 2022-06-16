import http from "../http-common";

class CommanderService {
  getAll() {
    return http.get("/missionCommanders");
  }
  get(id) {
    return http.get(`/missionCommanders/${id}`);
  }
  create(data) {
    return http.post("/missionCommander", data);
  }
  update(id, data) {
    return http.put(`/missionCommander/${id}`, data);
  }
  delete(id) {
    return http.delete(`/missionCommander/${id}`);
  }
}

export default new CommanderService();
