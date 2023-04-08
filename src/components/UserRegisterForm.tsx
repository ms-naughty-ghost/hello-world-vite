import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import type { FC, ChangeEvent, SyntheticEvent } from 'react';
const genderCode = { m: '男性', f: '女性', o: 'その他' } as const;

// ユーザー登録フォームの入力値を表す型
interface FormData {
  name: string;
  email: string;
  gender: keyof typeof genderCode;
  isAgree: boolean;
}

// このコンポーネントはユーザー登録フォームを表示する
const UserRegisterForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    gender: 'f',
    isAgree: false,
  });
  // フォームが送信されたときの処理
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(formData);
  };
  // フォームの入力値が変更されたときの処理
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
    console.log(formData);
  };
  // フォームの入力値をリセットする
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      gender: 'f',
      isAgree: false,
    });
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 400,
        backgroundColor: '#c0c0c0',
      }}
    >
      <Grid lg={8} sm={8} spacing={10}>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          {/** 名前のフォーム */}
          <FormLabel component="legend">ユーザー登録フォーム</FormLabel>
          <TextField
            label="名前"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="メールアドレス"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormLabel component="legend">性別</FormLabel>
          <RadioGroup defaultValue={'m'} name="gender" onChange={handleChange}>
            {Object.entries(genderCode).map(([code, label]) => (
              <FormControlLabel
                key={code}
                value={code}
                control={<Radio />}
                label={label}
              />
            ))}
          </RadioGroup>

          <FormLabel component="legend">利用規約</FormLabel>
          <FormControlLabel
            control={<Checkbox onChange={handleChange} />}
            label="同意する"
            name="isAgree"
          />
          <ButtonGroup>
            <Button type="reset">リセット</Button>
            <Button type="submit">登録</Button>
          </ButtonGroup>
        </form>
      </Grid>
    </Box>
  );
};

export default UserRegisterForm;
