export const timedNotification = (
  notificationToggle: (isShowing: boolean) => void,
  seconds: number
) => {
  notificationToggle(true);
  setTimeout(() => {
    notificationToggle(false);
  }, seconds * 1000);
};
