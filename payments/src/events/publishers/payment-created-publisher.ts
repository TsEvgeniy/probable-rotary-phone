import {PaymentCreatedEvent, Publisher, Subjects} from "@g_zone/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}