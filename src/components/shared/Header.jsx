import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <svg className="header-left__logo" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="24" height="24" stroke="white" stroke-width="2"></rect>
          <path d="M9.66402 7L11.677 7L7 19L5 19L9.66402 7Z" fill="white"></path>
          <path d="M12.5407 15.4265H11L11.3051 13.9853H12.861L13.2881 12H11.7627L12.0678 10.5735H13.6237L14.1881 8H15.8051L15.2254 10.5735H16.7356L17.3153 8H18.9475L18.3831 10.5735H20L19.6949 12H18.078L17.6356 13.9853H19.2525L18.9322 15.4265H17.3305L16.7508 18H15.1034L15.6678 15.4265H14.1729L13.6085 18H11.9763L12.5407 15.4265ZM16.0186 14.0441L16.4915 11.9412H14.8898L14.4169 14.0441H16.0186Z" fill="white"></path>
        </svg>
        <span className="divider">/</span>
        <div /* onClick="dropdownButton(this)" */ className="button dropdown-button">
          <div className="dropdown-option">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6" cy="6" r="6" fill="#007FFF"></circle>
            </svg>
            <span>Daytona-crew</span>
            <svg className="icon-right" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.406907 0.281907C0.616117 0.0726976 0.955312 0.0726976 1.16452 0.281907L4 3.11739L6.83548 0.281907C7.04469 0.0726976 7.38388 0.0726976 7.59309 0.281907C7.8023 0.491117 7.8023 0.830312 7.59309 1.03952L4.37881 4.25381C4.1696 4.46302 3.8304 4.46302 3.62119 4.25381L0.406907 1.03952C0.197698 0.830312 0.197698 0.491117 0.406907 0.281907Z" fill="white"></path>
            </svg>
          </div>

          <div className="dropdown-content dropdown-button__content">
            <button type="button" className="search-field">
              <svg width="13" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.6 1.4C3.2804 1.4 1.4 3.2804 1.4 5.6C1.4 7.9196 3.2804 9.8 5.6 9.8C7.9196 9.8 9.8 7.9196 9.8 5.6C9.8 3.2804 7.9196 1.4 5.6 1.4ZM0 5.6C0 2.50721 2.50721 0 5.6 0C8.69279 0 11.2 2.50721 11.2 5.6C11.2 6.8941 10.761 8.08567 10.0239 9.03395L13.795 12.805C14.0683 13.0784 14.0683 13.5216 13.795 13.795C13.5216 14.0683 13.0784 14.0683 12.805 13.795L9.03395 10.0239C8.08567 10.761 6.8941 11.2 5.6 11.2C2.50721 11.2 0 8.69279 0 5.6Z" fill="#A2A2A2"></path>
              </svg>
              <input type="search" placeholder="Find team..." id="search" className="search-input" name="search" /* onclick="stopPropagation(event)" */ />
            </button>

            <ul className="dropdown-list">
              <li>
                <button type="button" className="button content-option">
                  <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5.65686" y="0.843147" width="8" height="8" transform="rotate(45 5.65686 0.843147)" fill="#585858"></rect>
                  </svg>
                  <span>Personal <span className="grey-text">[default]</span></span>
                </button>
              </li>
              <li>
                <button type="button" className="button content-option">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" fill="#F1C40F"></circle>
                  </svg>
                  slrncl-studio
                </button>
              </li>
              <li>
                <button type="button" className="button content-option">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" fill="#007FFF"></circle>
                  </svg>
                  Daytona-crew
                </button>
              </li>
              <li>
                <button type="button" className="button content-option">
                  <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6.5" r="6" fill="url(#paint0_linear_3632_7731)"></circle>
                    <defs>
                      <linearGradient id="paint0_linear_3632_7731" x1="6" y1="0.5" x2="2.40945" y2="11.3189" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#007FFF"></stop>
                        <stop offset="1" stop-color="#8558DE"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  daytona-innovation-lab
                </button>
              </li>
            </ul>
            <div className="new-team">
              <button type="button" className="button content-option">
                <svg width="13" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.99998 3.16666C5.05446 3.16666 2.66665 5.55448 2.66665 8.49999C2.66665 11.4455 5.05446 13.8333 7.99998 13.8333C10.9455 13.8333 13.3333 11.4455 13.3333 8.49999C13.3333 5.55448 10.9455 3.16666 7.99998 3.16666ZM1.33331 8.49999C1.33331 4.8181 4.31808 1.83333 7.99998 1.83333C11.6819 1.83333 14.6666 4.8181 14.6666 8.49999C14.6666 12.1819 11.6819 15.1667 7.99998 15.1667C4.31808 15.1667 1.33331 12.1819 1.33331 8.49999ZM7.99998 5.16666C8.36817 5.16666 8.66665 5.46514 8.66665 5.83333V7.83333H10.6666C11.0348 7.83333 11.3333 8.1318 11.3333 8.49999C11.3333 8.86818 11.0348 9.16666 10.6666 9.16666H8.66665V11.1667C8.66665 11.5349 8.36817 11.8333 7.99998 11.8333C7.63179 11.8333 7.33331 11.5349 7.33331 11.1667V9.16666H5.33331C4.96512 9.16666 4.66665 8.86818 4.66665 8.49999C4.66665 8.1318 4.96512 7.83333 5.33331 7.83333H7.33331V5.83333C7.33331 5.46514 7.63179 5.16666 7.99998 5.16666Z" fill="white"></path>
                </svg>
                New team
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="header-right">
        <div /* onClick="disablePage(this)" */ className="button dropdown-button">
          <div className="profile-dropdown">
            <button type="button" className="button profile-button">
              <img src="../asset/img/profile-img.png" alt="Profile image" />
            </button>
            <div className="dropdown-content">
              <div className="profile-name">
                <h5>Nicolas Solerieu</h5>
                <p className="user-name">@nsolerieu</p>
              </div>
              <ul className="dropdown-list">
                <li>
                  <button type="button" className="button content-option">
                    <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 2.16668C4.52724 2.16668 3.33333 3.36058 3.33333 4.83334C3.33333 6.3061 4.52724 7.50001 6 7.50001C7.47276 7.50001 8.66667 6.3061 8.66667 4.83334C8.66667 3.36058 7.47276 2.16668 6 2.16668ZM2 4.83334C2 2.6242 3.79086 0.833344 6 0.833344C8.20914 0.833344 10 2.6242 10 4.83334C10 7.04248 8.20914 8.83334 6 8.83334C3.79086 8.83334 2 7.04248 2 4.83334ZM3.33333 11.5C2.22876 11.5 1.33333 12.3954 1.33333 13.5C1.33333 13.8682 1.03486 14.1667 0.666667 14.1667C0.298477 14.1667 0 13.8682 0 13.5C0 11.6591 1.49239 10.1667 3.33333 10.1667L8.66667 10.1667C10.5076 10.1667 12 11.6591 12 13.5C12 13.8682 11.7015 14.1667 11.3333 14.1667C10.9651 14.1667 10.6667 13.8682 10.6667 13.5C10.6667 12.3954 9.77124 11.5 8.66667 11.5L3.33333 11.5Z" fill="white"></path>
                    </svg>
                    Profile
                  </button>
                </li>
                <li>
                  <button type="button" className="button content-option">
                    <svg width="12" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.99998 2.16665C6.63179 2.16665 6.33331 2.46512 6.33331 2.83331C6.33331 3.96148 4.96931 4.52647 4.17157 3.72874C3.91122 3.46839 3.48911 3.46839 3.22876 3.72874C2.96841 3.98909 2.96841 4.4112 3.22876 4.67155C4.02653 5.46931 3.46146 6.83331 2.33331 6.83331C1.96512 6.83331 1.66665 7.13179 1.66665 7.49998C1.66665 7.86817 1.96512 8.16665 2.33331 8.16665C3.46155 8.16665 4.02641 9.53072 3.22872 10.3284C2.96837 10.5888 2.96837 11.0109 3.22872 11.2712C3.48907 11.5316 3.91118 11.5316 4.17153 11.2712C4.96925 10.4735 6.33331 11.0384 6.33331 12.1666C6.33331 12.5348 6.63179 12.8333 6.99998 12.8333C7.36817 12.8333 7.66665 12.5348 7.66665 12.1666C7.66665 11.0385 9.03067 10.4735 9.82842 11.2712C10.0888 11.5316 10.5109 11.5316 10.7712 11.2712C11.0316 11.0109 11.0316 10.5887 10.7712 10.3284C9.97352 9.53069 10.5384 8.16665 11.6666 8.16665C12.0348 8.16665 12.3333 7.86817 12.3333 7.49998C12.3333 7.13179 12.0348 6.83331 11.6666 6.83331C10.5385 6.83331 9.9734 5.46935 10.7712 4.67156C11.0315 4.41121 11.0315 3.9891 10.7712 3.72875C10.5108 3.4684 10.0887 3.4684 9.82838 3.72875C9.03062 4.52651 7.66665 3.96144 7.66665 2.83331C7.66665 2.46512 7.36817 2.16665 6.99998 2.16665ZM5.00542 2.68466C5.08147 1.64951 5.94541 0.833313 6.99998 0.833313C8.05455 0.833313 8.91849 1.64951 8.99454 2.68467C9.78028 2.00649 10.9683 2.04025 11.714 2.78594C12.4597 3.53164 12.4934 4.71968 11.8153 5.50542C12.8504 5.58145 13.6666 6.4454 13.6666 7.49998C13.6666 8.55455 12.8504 9.41849 11.8153 9.49454C12.4935 10.2803 12.4597 11.4683 11.714 12.214C10.9683 12.9597 9.78028 12.9935 8.99454 12.3153C8.91851 13.3504 8.05456 14.1666 6.99998 14.1666C5.9454 14.1666 5.08145 13.3504 5.00542 12.3153C4.21968 12.9935 3.03161 12.9597 2.28591 12.214C1.54021 11.4683 1.50646 10.2803 2.18466 9.49454C1.14951 9.41848 0.333313 8.55455 0.333313 7.49998C0.333313 6.44539 1.14953 5.58145 2.1847 5.50542C1.5065 4.71968 1.54025 3.53163 2.28595 2.78593C3.03164 2.04023 4.21968 2.00648 5.00542 2.68466Z" fill="white"></path>
                      <path d="M6.99998 6.16665C6.64636 6.16665 6.30722 6.30712 6.05717 6.55717C5.80712 6.80722 5.66665 7.14636 5.66665 7.49998C5.66665 7.8536 5.80712 8.19274 6.05717 8.44279C6.30722 8.69284 6.64636 8.83331 6.99998 8.83331C7.3536 8.83331 7.69274 8.69284 7.94279 8.44279C8.19284 8.19274 8.33331 7.8536 8.33331 7.49998C8.33331 7.14636 8.19284 6.80722 7.94279 6.55717C7.69274 6.30712 7.3536 6.16665 6.99998 6.16665ZM5.11436 5.61436C5.61446 5.11426 6.29274 4.83331 6.99998 4.83331C7.70722 4.83331 8.3855 5.11426 8.8856 5.61436C9.38569 6.11446 9.66665 6.79274 9.66665 7.49998C9.66665 8.20722 9.38569 8.8855 8.8856 9.3856C8.3855 9.88569 7.70722 10.1666 6.99998 10.1666C6.29274 10.1666 5.61446 9.88569 5.11436 9.3856C4.61426 8.8855 4.33331 8.20722 4.33331 7.49998C4.33331 6.79274 4.61426 6.11446 5.11436 5.61436Z" fill="white"></path>
                    </svg>
                    Settings
                  </button>
                </li>
                <li>
                  <button type="button" className="button content-option">
                    <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.7641 1.66542C4.9622 1.17745 5.44092 0.833344 6 0.833344C6.55909 0.833344 7.0378 1.17745 7.23591 1.66542C9.21345 2.20715 10.6667 4.01721 10.6667 6.16668L10.6667 9.29816L11.888 11.1302C12.0244 11.3348 12.0371 11.5978 11.9211 11.8146C11.8051 12.0314 11.5792 12.1667 11.3333 12.1667H8.30971C8.14796 13.2974 7.17549 14.1667 6 14.1667C4.82451 14.1667 3.85204 13.2974 3.6903 12.1667H0.666668C0.420804 12.1667 0.194897 12.0314 0.0788846 11.8146C-0.0371281 11.5978 -0.024413 11.3348 0.111967 11.1302L1.33333 9.29816L1.33333 6.16668C1.33333 4.01721 2.78655 2.20715 4.7641 1.66542ZM5.0569 12.1667C5.19418 12.5551 5.5646 12.8333 6 12.8333C6.43541 12.8333 6.80582 12.5551 6.9431 12.1667H5.0569ZM6 2.83334C4.15905 2.83334 2.66667 4.32573 2.66667 6.16668L2.66667 9.50001C2.66667 9.63163 2.62771 9.7603 2.5547 9.86981L1.91235 10.8333L10.0877 10.8333L9.4453 9.86981C9.37229 9.7603 9.33333 9.63163 9.33333 9.50001L9.33333 6.16668C9.33333 4.32573 7.84095 2.83334 6 2.83334Z" fill="white"></path>
                    </svg>
                    Notifications
                  </button>
                </li>
                <li>
                  <button type="button" className="button content-option">
                    <svg width="12" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 6C6.5 3.79086 8.29086 2 10.5 2C12.7091 2 14.5 3.79086 14.5 6C14.5 8.20914 12.7091 10 10.5 10C10.0553 10 9.62908 9.92773 9.23144 9.79488C8.96183 9.70479 8.66445 9.77489 8.46345 9.97589L7.43934 11H6.25C5.83579 11 5.5 11.3358 5.5 11.75V12.9393L5.43934 13H4.25C3.83579 13 3.5 13.3358 3.5 13.75V14.9393L3.43934 15H1.75C1.61193 15 1.5 14.8881 1.5 14.75V13.0607L6.52411 8.03655C6.72511 7.83555 6.79521 7.53818 6.70513 7.26856C6.57227 6.87092 6.5 6.44466 6.5 6ZM10.5 0.5C7.46243 0.5 5 2.96243 5 6C5 6.44272 5.05246 6.874 5.15173 7.28761L0.21967 12.2197C0.0790176 12.3603 0 12.5511 0 12.75V14.75C0 15.7165 0.783502 16.5 1.75 16.5H3.75C3.94891 16.5 4.13968 16.421 4.28033 16.2803L4.78033 15.7803C4.92098 15.6397 5 15.4489 5 15.25V14.5H5.75C5.94891 14.5 6.13968 14.421 6.28033 14.2803L6.78033 13.7803C6.92098 13.6397 7 13.4489 7 13.25V12.5H7.75C7.94891 12.5 8.13968 12.421 8.28033 12.2803L9.21239 11.3483C9.626 11.4475 10.0573 11.5 10.5 11.5C13.5376 11.5 16 9.03757 16 6C16 2.96243 13.5376 0.5 10.5 0.5ZM11 6.5C11.5523 6.5 12 6.05228 12 5.5C12 4.94772 11.5523 4.5 11 4.5C10.4477 4.5 10 4.94772 10 5.5C10 6.05228 10.4477 6.5 11 6.5Z" fill="white"></path>
                    </svg>
                    SSH Keys
                  </button>
                </li>
                <li>
                  <button type="button" className="button content-option">
                    <svg width="12" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33333 11.8333C5.33333 11.4651 5.03486 11.1667 4.66667 11.1667H1.33333L1.33333 1.83333L4.66667 1.83333C5.03486 1.83333 5.33333 1.53486 5.33333 1.16667C5.33333 0.798476 5.03486 0.5 4.66667 0.5L1.33333 0.5C0.596954 0.5 0 1.09695 0 1.83333L0 11.1667C0 11.903 0.596954 12.5 1.33333 12.5H4.66667C5.03486 12.5 5.33333 12.2015 5.33333 11.8333Z" fill="#A2A2A2"></path>
                      <path d="M12.4757 6.96703C12.5375 6.90414 12.5843 6.83203 12.6161 6.75519C12.6484 6.67716 12.6664 6.59166 12.6667 6.502L12.6667 6.5L12.6667 6.498C12.6662 6.32805 12.6011 6.15826 12.4714 6.0286L9.80474 3.36193C9.54439 3.10158 9.12228 3.10158 8.86193 3.36193C8.60158 3.62228 8.60158 4.04439 8.86193 4.30474L10.3905 5.83333H4C3.63181 5.83333 3.33333 6.13181 3.33333 6.5C3.33333 6.86819 3.63181 7.16667 4 7.16667H10.3905L8.86193 8.69526C8.60158 8.95561 8.60158 9.37772 8.86193 9.63807C9.12228 9.89842 9.54439 9.89842 9.80474 9.63807L12.4709 6.97188L12.4757 6.96703Z" fill="#A2A2A2"></path>
                    </svg>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export { Header }