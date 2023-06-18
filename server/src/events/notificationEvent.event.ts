import EventEmitter from "node:events";

class NotificationEvent extends EventEmitter {}

const notificationEvent = new NotificationEvent();

export default notificationEvent;
