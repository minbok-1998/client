import { useCallback, useRef, useState, useEffect } from 'react'
import styled from "styled-components";
// import Icon from "../../img/AddImgIcon.svg" // 이ㅓ왜 안댕

const Cont = styled.div`
    position: relative;
    width: 48%;
    padding: 21px;
    background-color: #fff;
    border-radius: 10px;
    margin: 0 auto;
    margin-bottom: 20px;
`

const Wrap = styled.div`
    display: flex;
    height: auto;
`

const UserImg = styled.img`
    width: 3rem;
    height: 3rem;
    background: #ced0d0;
    border: none;
    border-radius: 50%;
    margin: 0 20px 0 0;
`

const Content = styled.textarea`
    width: 100%;
    resize: none;
    overflow-y: hidden;

    font-size: 18px;
    font-weight: 400;
    border: none;
    background-color: transparent;
    color: #7e7e7e;
    padding: 10px;

    :focus {
      outline: none;
    }
`

const ImgWrap = styled.div`
  width: 100%;
  height: auto;
  margin: 20px 0 0 0;
`;

const Preview = styled.img`
  height: 30px;
  padding-right: 20px;
  cursor: pointer;
`;

const BtnWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 0 0;
`

const Label = styled.label`
    width: 2.125rem;
    height: 2.125rem;
    background-color: yellow;
`

const AddImg = styled.input`
 display: none;
`

const PostBtn = styled.button`
    width: 5.438rem;
    height: 2.25rem;
    border: none;
    border-radius: 20px;
`

function Posting() {
    // textarea 자동 높이 조절
    const textRef = useRef<HTMLTextAreaElement>(null);
    const autoResizeTextarea = useCallback(() => {
        if(textRef === null || textRef.current === null) {
            return;
        }
        textRef.current.style.height = '48px';
        textRef.current.style.height = textRef.current.scrollHeight + 'px'
    }, []);

    // 이미지 상대 경로 받아오기
    const [img, setImg] = useState<string[]>([]);

    const handleImg = (e: { target: { files: any } }) => {
      const file = e.target.files;
  
      for (let i = 0; i < file.length; i++) {
        const imgUrl = URL.createObjectURL(file[i]);
        setImg((prev) => [...prev, imgUrl]);
      }
    };

    // 미리보기 이미지 클릭시 삭제
    const onRemove = (event: any) => {
      setImg(img.filter((img) => img !== event.target.currentSrc));
    };

    // 이미지 최대 개수 4개로 제한
    useEffect(() => {
      if (img.length > 4) {
        alert("이미지는 최대 4개까지 첨부 가능합니다.");
        setImg([]);
      }
    })

    return(
        <Cont>
            <Wrap>
                <UserImg />
                <Content 
                    ref={textRef}
                    placeholder="What's happening?"
                    onInput={autoResizeTextarea}
                />
            </Wrap>

            <ImgWrap>
                {img.map((data) => {
                    return <Preview src={data} onClick={onRemove}/>
                })}
            </ImgWrap>
            

            <BtnWrap>
                <Label htmlFor="addImg" />
                <AddImg 
                    type="file"
                    accept="image/jpg,image/png,image/jpeg,image/gif"
                    // onChange={(e) => handleImg(e)}
                    id="addImg"
                    multiple
                    onChange={(e) => handleImg(e)}
                />
                <PostBtn>완료</PostBtn>
            </BtnWrap>
        </Cont>
    )
}


export default Posting;