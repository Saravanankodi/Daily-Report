import mongoose, { Schema, Document } from 'mongoose';

export interface IReport extends Document {
  userId: string;
  username: string;
  date: Date;
  report: string;
}

const reportSchema = new Schema<IReport>({
  userId: { type: String, required: true },
  username: { type: String, required: true },
  date: { type: Date, required: true },
  report: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model<IReport>('Report', reportSchema);