import React, { useState } from 'react';
import styles from './foldMenu.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const FoldMenu: React.FC<FoldMenuProps> = ({ taskNo }) => {
  const [isMenuFolded, setIsMenuFolded] = useState(false);

  const toggleMenu = () => {
    setIsMenuFolded(!isMenuFolded);
  };

  return (
    <div className={`${styles.foldMenu} ${isMenuFolded ? styles.folded : ''}`}>
    <div className={styles.menuHeader +' row'}>
        <h3 className={(isMenuFolded ? styles.hidden : styles.menuText ) + ' col'}>Menu</h3>
        <button className={styles.foldButton + ' col'} onClick={toggleMenu}>
            <MenuIcon />
        </button>
      </div>
      {!isMenuFolded && (
        <div className={styles.menuContent + ' col'}>
          <h6 className={styles.menuSubHeader}>TASKS</h6>
          <button className={styles.taskButton + ' row justify-content-between'}>
            <div className='col-auto'>
              <KeyboardDoubleArrowRightIcon />
              <span>Today</span>
            </div>
            <span className='col-auto'>{ taskNo }</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FoldMenu;
