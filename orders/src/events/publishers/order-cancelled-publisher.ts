import {
  OrderCancelledEvent,
  Publisher,
  Subjects
} from "@g_zone/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}