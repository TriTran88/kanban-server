const Ticket = require("./../model/ticket.model");
const { Types } = require('mongoose');

class KanbanService {
  async getTickets(page, limit) {
    const skip = (page - 1) * limit;
    const total = await Ticket.countDocuments();
    const tickets = await Ticket.find().skip(skip).limit(limit).exec();
    const totalPages = Math.ceil(total / limit);
    return {
      page,
      limit,
      total,
      totalPages,
      data: tickets,
    };
  }
  async createTicket(title, description) {
    const doc = await Ticket.create({ title, description });
    return doc;
  }
  async updateTicket(id, title, description, status) {
    return await Ticket.findByIdAndUpdate(
      id,
      { title, description, status },
      { new: true }
    );
  }
  async deleteTicket(id) {
    return await Ticket.deleteOne({ _id: id });
  }
}

module.exports = new KanbanService();
