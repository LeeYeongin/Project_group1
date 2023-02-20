import React, { useEffect, useState } from 'react';
import './CarList.css';

interface ItemProps {
  idUser: string;
  status: boolean;
  curriItems: any[];
}

interface DetailProps {
  section: string;
  idUser: string;
  status: boolean;
  curriItems: any[];
}

const CarDetail = ({ status, idUser, section, curriItems }: DetailProps) => {
  const [isOpen, setMenu] = useState(false); // 메뉴의 초기값을 false로 설정

  const [itemList, setItemList] = useState<any[]>([]);

  useEffect(() => {
    const tmp = curriItems.filter((item) => item.section === section);
    setItemList(tmp);
  }, []);

  return (
    <ul
      className="car5_title"
      onClick={() => setMenu((isOpen) => !isOpen)}
      key={section}
    >
      <h4>강의 {section}</h4>
      {itemList.map((item) => (
        <li className={isOpen ? 'car5_item' : 'hide_item'}>
          강의 {item.part}
          <iframe
            className={
              idUser
                ? status
                  ? isOpen
                    ? 'car5_video'
                    : 'hide_video'
                  : 'hide_video'
                : 'hide_video'
            }
            width="560"
            height="315"
            src={item.video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </li>
      ))}
    </ul>
  );
};

const CarList = ({ status, idUser, curriItems }: ItemProps) => {
  // 3개만 있을때 발생, 3개이상 될시 ul에 갯수에따른 useState값과 토글메뉴가 따로 생성되어야 한다.

  const [sectionList, setSectionList] = useState<string[]>([]);

  useEffect(() => {
    const set = new Set<string>();
    curriItems.forEach((item) => set.add(item.section));
    const tmp: string[] = [];
    set.forEach((item) => {
      tmp.push(item);
    });
    setSectionList(tmp.sort());
  }, []);

  return (
    <div className="car5_list">
      {sectionList.map((section) => (
        <CarDetail
          status={status}
          idUser={idUser}
          section={section}
          curriItems={curriItems}
        />
      ))}
    </div>
  );
};

export default CarList;
