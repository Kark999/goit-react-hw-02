import css from './Notification.module.css';

const Notification = () => {
  return (
    <div className={css.notificationContainer}>
      <p className={css.notificationText}>No feedback yet</p>
    </div>
  );
};

export default Notification;
