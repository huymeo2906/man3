import React, { useState, useCallback } from "react";
import styles from "./ProfileDefault.module.css";

const ProfileDefault = () => {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Nam");
  const [phone, setPhone] = useState("");

  const onButtonContainerClick = useCallback(() => {
    // Xử lý lưu thông tin hồ sơ khi nút "Chỉnh sửa" được nhấn
    console.log("Username:", username);
    console.log("Họ và tên:", fullName);
    console.log("Ngày sinh:", birthDate);
    console.log("Email:", email);
    console.log("Giới tính:", gender);
    console.log("Số điện thoại:", phone);
  }, [username, fullName, birthDate, email, gender, phone]);

  return (
    <div className={styles.profileEditProfile}>
      <div className={styles.menu}>
        <div className={styles.menuMini}>
          <div className={styles.frameParent}>
            <div className={styles.uangleDoubleRightWrapper}>
              <img
                className={styles.uangleDoubleRightIcon}
                alt=""
                src="/uangledoubleright.svg"
              />
            </div>
            <div className={styles.iconButtonParent}>
              <div className={styles.iconButton}>
                <img
                  className={styles.uhomeAltIcon}
                  alt=""
                  src="/uhomealt.svg"
                />
              </div>
              <div className={styles.iconButton1}>
                <img
                  className={styles.uhomeAltIcon}
                  alt=""
                  src="/ulistul.svg"
                />
              </div>
              <div className={styles.iconButton1}>
                <img
                  className={styles.uhomeAltIcon}
                  alt=""
                  src="/usuitcase.svg"
                />
              </div>
              <div className={styles.iconButton1}>
                <img
                  className={styles.uhomeAltIcon}
                  alt=""
                  src="/ufilemedicalalt.svg"
                />
              </div>
              <div className={styles.iconButton1}>
                <img
                  className={styles.uhomeAltIcon}
                  alt=""
                  src="/usitemap.svg"
                />
              </div>
              <div className={styles.iconButton1}>
                <img
                  className={styles.uhomeAltIcon}
                  alt=""
                  src="/uusersalt.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.uangleDoubleRightWrapper}>
            <img
              className={styles.uangleDoubleRightIcon}
              alt=""
              src="/usetting.svg"
            />
          </div>
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/rectangle-1.svg" />
          <div className={styles.image1Parent}>
            <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
            <div className={styles.qunLTiKhonParent}>
              <div className={styles.qunLTi}>Quản lý tài khoản</div>
              <div className={styles.mennuParent}>
                <div className={styles.mennu}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/ucreatedashboard.svg"
                  />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.hmNay}>Thông tin cá nhân</div>
                  </div>
                  <img
                    className={styles.uangleRightIcon}
                    alt=""
                    src="/uangleright.svg"
                  />
                </div>
                <div className={styles.mennu1}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/unotifiacation.svg"
                  />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.hmNay}>Quản lý thông báo</div>
                  </div>
                  <img
                    className={styles.uangleRightIcon}
                    alt=""
                    src="/uangleright1.svg"
                  />
                </div>
                <div className={styles.mennu1}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/ucommentdots.svg"
                  />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.hmNay}>Trò chuyện</div>
                  </div>
                  <img
                    className={styles.uangleRightIcon}
                    alt=""
                    src="/uangleright1.svg"
                  />
                </div>
                <div className={styles.mennu1}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/ulock.svg"
                  />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.hmNay}>Đổi mật khẩu</div>
                  </div>
                  <img
                    className={styles.uangleRightIcon}
                    alt=""
                    src="/uangleright1.svg"
                  />
                </div>
                <div className={styles.mennu1}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/ueditalt2.svg"
                  />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.hmNay}>Quản lý chữ ký</div>
                  </div>
                  <img
                    className={styles.uangleRightIcon}
                    alt=""
                    src="/uangleright1.svg"
                  />
                </div>
                <div className={styles.mennu1}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/ufileblank.svg"
                  />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.hmNay}>Tài liệu của tôi</div>
                  </div>
                  <img
                    className={styles.uangleRightIcon}
                    alt=""
                    src="/uangleright1.svg"
                  />
                </div>
                <div className={styles.mennu1}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/usignoutalt.svg"
                  />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.hmNay}>Đăng xuất</div>
                  </div>
                  <img
                    className={styles.uangleRightIcon}
                    alt=""
                    src="/uangleright1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.coverParent}>
        <div className={styles.cover}>
          <img
            className={styles.unsplashhorhcnqsxnqIcon}
            alt=""
            src="/unsplashhorhcnqsxnq@2x.png"
          />
          <div className={styles.notificationWrapper}>
            <div className={styles.notification}>
              <img
                className={styles.ucreateDashboardIcon}
                alt=""
                src="/ucamerachange.svg"
              />
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.unsplashpuhxosappfaWrapper}>
                <img
                  className={styles.unsplashpuhxosappfaIcon}
                  alt=""
                  src="/unsplashpuhxosappfa@2x.png"
                />
              </div>
              <div className={styles.ucameraWrapper}>
                <img className={styles.ucameraIcon} alt="" src="/ucamera.svg" />
              </div>
            </div>
            <div className={styles.nguynHongNamParent}>
              <div className={styles.nguynHongNam}>Nguyễn Hoàng Nam</div>
              <div className={styles.nhnVinIt}>Nhân viên IT</div>
            </div>
          </div>
        </div>
        <div className={styles.headerWrapper}>
          <div className={styles.header}>
            <div className={styles.flow1Parent}>
              <img className={styles.flow1Icon} alt="" src="/flow-1.svg" />
              <div className={styles.avt}>
                <div className={styles.userpic} />
                <div className={styles.state} />
                <div className={styles.label}>KA</div>
              </div>
              <div className={styles.overviewParent}>
                <div className={styles.qunLTi}>My Profile</div>
                <div className={styles.employees}>Employees</div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.memberParent}>
                <div className={styles.member}>
                  <div className={styles.avt1}>
                    <div className={styles.userpic1} />
                    <div className={styles.state1} />
                    <div className={styles.label1}>KA</div>
                  </div>
                  <div className={styles.avt2}>
                    <div className={styles.userpic2} />
                    <div className={styles.state1} />
                    <div className={styles.label1}>NH</div>
                  </div>
                  <div className={styles.avt3}>
                    <div className={styles.userpic3} />
                    <div className={styles.state1} />
                    <div className={styles.label1}>HN</div>
                  </div>
                  <div className={styles.avt4}>
                    <img
                      className={styles.ovalCopy3}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.wrapper}>
                      <div className={styles.div}>+3</div>
                    </div>
                  </div>
                </div>
                <div className={styles.input}>
                  <div className={styles.usearchParent}>
                    <img
                      className={styles.ucreateDashboardIcon}
                      alt=""
                      src="/usearch.svg"
                    />
                    <div className={styles.search}>Search</div>
                  </div>
                  <img
                    className={styles.uangleDownIcon}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                </div>
              </div>
              <div className={styles.uplusWrapper}>
                <img
                  className={styles.ucreateDashboardIcon}
                  alt=""
                  src="/uplus.svg"
                />
              </div>
              <div className={styles.memberParent}>
                <div className={styles.component2}>
                  <div className={styles.ucommentDotsWrapper}>
                    <img
                      className={styles.ucreateDashboardIcon}
                      alt=""
                      src="/ucommentdots1.svg"
                    />
                  </div>
                  <div className={styles.component2Child} />
                </div>
                <div className={styles.component2}>
                  <div className={styles.ucommentDotsWrapper}>
                    <img
                      className={styles.ucreateDashboardIcon}
                      alt=""
                      src="/unotifiacation1.svg"
                    />
                  </div>
                  <div className={styles.component2Child} />
                </div>
                <div className={styles.unsplashfgUd73uZmWrapper}>
                  <img
                    className={styles.unsplashfgUd73uZmIcon}
                    alt=""
                    src="/unsplashfg-ud73u-zm@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.frameParent3}>
            <div className={styles.frameParent4}>
              <div className={styles.uuserParent}>
                <img
                  className={styles.ucreateDashboardIcon}
                  alt=""
                  src="/uuser.svg"
                />
                <div className={styles.thngTinC}>Thông tin cá nhân</div>
              </div>
              <button className={styles.button} onClick={onButtonContainerClick}>
                <img
                  className={styles.ucreateDashboardIcon}
                  alt=""
                  src="/usave.svg"
                />
                <div className={styles.text}>Lưu</div>
              </button>
              </div>
            </div>
            <div className={styles.frameItem} />
          </div>
          <div className={styles.frameParent5}>
            <div className={styles.inputParent}>
              <div className={styles.input1}>
                <div className={styles.label4}>
                  <span>*</span>
                  <span className={styles.username}> Username</span>
                </div>
                <div className={styles.input2}>
                  <img
                    className={styles.outlineSearch}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                    <input
                     type="text"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                   />
                  <div className={styles.label5}></div>
                  <img
                    className={styles.outlineSearch}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                  <img
                    className={styles.outlineSearch}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                </div>
              </div>
              <div className={styles.input3}>
                <div className={styles.label4}>
                  <span>*</span>
                  <span className={styles.hVTn}> Họ và tên</span>
                </div>
                <div className={styles.input4}>
                  <div className={styles.stroke} />
                  <div className={styles.background} />
                  <div className={styles.icon}>
                    <img
                      className={styles.outlineClose1}
                      alt=""
                      src="/-outline--close.svg"
                    />
                      <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      />
                  </div>
                  <div className={styles.placeholderIcons}>
                    <img
                      className={styles.outlineSearch1}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <img
                      className={styles.outlineMenu1}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.labelPointer}>
                      <div className={styles.label5}></div>
                      <div className={styles.pointer} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.input5}>
                <div className={styles.label4}>Ngày sinh</div>
                <div className={styles.input6}>
                  <img
                    className={styles.outlineSearch1}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                    <input
                     type="text"
                    value={birthDate}
                     onChange={(e) => setBirthDate(e.target.value)}
                    />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.search}></div>
                    <div className={styles.pointer1} />
                  </div>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/ucalender.svg"
                  />
                  <img
                    className={styles.outlineMenu1}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.input1}>
                <div className={styles.label4}>
                  <span>*</span>
                  <span className={styles.username}> Email</span>
                </div>
                <div className={styles.input2}>
                  <img
                    className={styles.outlineSearch}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                    <input
                   type="text"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className={styles.label5}></div>
                  <img
                    className={styles.outlineSearch}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                  <img
                    className={styles.outlineSearch}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                </div>
              </div>
              <div className={styles.input1}>
                <div className={styles.label4}>
                  <span>*</span>
                  <span className={styles.hVTn}> Giới tính</span>
                </div>
                <div className={styles.input6}>
                  <img
                    className={styles.outlineSearch1}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                   <select
                   value={gender}
                  onChange={(e) => setGender(e.target.value)}
                   >
                   <option value="Nam">Nam</option>
                   <option value="Nữ">Nữ</option>
                   <option value="Khác">Khác</option>
                  </select>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/uangledown.svg"
                  />
                  <img
                    className={styles.outlineMenu1}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                </div>
              </div>
              <div className={styles.input1}>
                <div className={styles.label4}>
                  <span>*</span>
                  <span className={styles.hVTn}> Số điện thoại</span>
                </div>
                <div className={styles.input6}>
                  <img
                    className={styles.outlineSearch1}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                   <input
                  type="text"
                   value={phone}
                   onChange={(e) => setPhone(e.target.value)}
                   />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.search}></div>
                    <div className={styles.pointer1} />
                  </div>
                  <img
                    className={styles.outlineSearch1}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                  <img
                    className={styles.outlineMenu1}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProfileEditProfile;
