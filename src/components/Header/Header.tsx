import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <NavLink
          to='/'
          exact
          className={classes.link}
          activeClassName={classes.active}
        >
          Home
        </NavLink>
        <NavLink
          to='/todo'
          exact
          className={classes.link}
          activeClassName={classes.active}
        >
          ToDo
        </NavLink>
      </div>
    </header>
  );
};
