import {ExpirationCompleteEvent, Publisher, Subjects} from "@g_zone/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}