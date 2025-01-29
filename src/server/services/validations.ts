import { body } from 'express-validator';

export const messageValidation = [
  body('fullName', 'Укажите имя ').isLength({ min: 3 }),
  body('email', 'Неверный формат почты').isEmail(),
  body('phone', 'Введите номер телефона').isLength({ min: 12 }).isString(),
  body('text', 'Введите текст').isLength({ min: 3 }).isString(),

];
