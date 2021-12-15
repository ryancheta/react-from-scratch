import React from 'react'
import { classes } from '../../utils';
import {flex, centerItems} from '../../assets/scss/_flex.mod.scss';
import {margin_left_xs} from '../../assets/scss/_margin.mod.scss';
import styles from './styles.mod.scss';
import classnames from 'classnames';

const Stat = ({stat}) => {
  const {title, percentage, increase} = stat;
  let statContainerClasses = classnames(flex, centerItems, {
    [styles.increase]: increase,
    [styles.decrease]: !increase
  })

  return (
    <div>
      <p className={styles.title}><small>{title}</small></p>
      <div className={statContainerClasses}>
        &times;
        <p className={margin_left_xs}><big>{percentage}%</big></p>
      </div>
    </div>
  )
}


const Icon = props => <div {...props}></div>

export default Stat;
