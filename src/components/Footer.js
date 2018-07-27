import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../state/actions';

const Footer = ({ active, children, onClick }) => (
    <p>
        <span>Show: </span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </p>
);

export default Footer;
