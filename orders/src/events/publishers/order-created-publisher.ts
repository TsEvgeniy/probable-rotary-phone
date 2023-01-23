import {OrderCreatedEvent, Publisher, Subjects} from "@g_zone/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;

}