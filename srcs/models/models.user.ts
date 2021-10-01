import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

// user 모델의 구성요소를 명시
interface UserAttributes {
    email: string;
    password: string | null;
    nickname: string;
    avatar: string | null;
    state: string;
    provider: string;
    snsId: string | null;
}

export class User extends Model<UserAttributes> {
    public readonly id!: number;
    public email!: string;
    public password!: string;
    public nickname!: string;
    public avatar!: string;
    public state!: string;
    public provider!: string;
    public snsId!: string;

    // public static associations: {};
}

User.init(
    {
        email: {
            type: DataTypes.STRING(45),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        nickname: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        avatar: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        state: {
            type: DataTypes.ENUM('calling', 'normal'),
            allowNull: false,
            defaultValue: 'normal',
        },
        provider: {
            type: DataTypes.ENUM('local', 'google', 'naver'),
            allowNull: false,
            defaultValue: 'local',
        },
        snsId: {
            type: DataTypes.STRING(30),
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: true, // 생성, 삭제, 수정 시간 기록
        charset: 'utf8', // 한글 지원
        collate: 'utf8_general_ci',
        // paranoid: true, // 소프트 삭제 허용
    }
);
