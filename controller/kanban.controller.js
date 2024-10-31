const kanbanService = require("./../service/kanban.service");

class KanbanController {
  async getTickets(req, res) {
    try {
      const page = req?.query?.page || 1;
      const limit = req.query?.limt || 10;
      const resp = await kanbanService.getTickets(page, limit);
      return res.json(resp);
    } catch (error) {
      console.error(`Fail to get ticket list error:`, error);
      throw error;
    }
  }

  async createTicket(req, res) {
    try {
      const title = req?.body?.title;
      const description = req?.body?.description;
      const resp = await kanbanService.createTicket(title, description);
      return res.json(resp);
    } catch (error) {
      console.error(`Fail to create ticket list error:`, error);
      throw error;
    }
  }

  async updateTicket(req, res) {
    try {
      const id = req?.params?.id;
      if (!id) {
        throw new Error({ messsage: "Param id is required " });
      }
      const title = req?.body?.title;
      const description = req?.body?.description;
      const status = req?.body?.status;
      const resp = await kanbanService.updateTicket(id, title, description, status);
      return res.json(resp);
    } catch (error) {
      console.error(`Fail to update ticket list error:`, JSON.stringify(error));
      throw error;
    }
  }

  async deleteTicket(req, res) {
    try {
      const id = req?.params?.id;
      if (!id) {
        throw new Error({ messsage: "Param id is required " });
      }
      const resp = await kanbanService.deleteTicket(id);
      return res.json(resp);
    } catch (error) {
      console.error(`Fail to delete ticket list error:`, error);
      throw error;
    }
  }
}

module.exports = new KanbanController();
