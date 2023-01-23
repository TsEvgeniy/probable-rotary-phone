// import {OrderCreatedListener} from "../order-created-listener";
// import {natsWrapper} from "../../../nats-wrapper";
// import {Ticket} from "../../../models/ticket";
// import {OrderCreatedEvent, OrderStatus} from "@g_zone/common";
// import mongoose from "mongoose";
// import {Message} from "node-nats-streaming";
//
// const setup = async () => {
//   const listener = new OrderCreatedListener(natsWrapper.client);
//   const ticket = Ticket.build({
//     title: 'concert',
//     price: 99,
//     userId: 'adfa'
//   });
//
//   await ticket.save();
//
//   const data: OrderCreatedEvent['data'] = {
//     id: mongoose.Types.ObjectId().toHexString();
//     version: 0,
//     status: OrderStatus.Created,
//     userId: 'fdadfad',
//     expiresAt: 'fdafaf',
//     ticket: {
//       id: ticket.id,
//       price: ticket.price
//     }
//   };
//
//   //@ts-ignore
//   const msg: Message = {
//     ack: jest.fn()
//   };
//
//   return { listener, ticket, data, msg };
// }