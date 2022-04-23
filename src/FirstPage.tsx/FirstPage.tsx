import 'antd/dist/antd.css';
import { Card } from 'antd';
const FirstPage = () => {
    const { Meta } = Card;
    return (
        <div>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
        </div>
    )
}
export default FirstPage