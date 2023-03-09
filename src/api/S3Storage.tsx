import BackendApi from './shared/BackendApi';

export const uploadUserFile = async (userId: string, fileName: string, data: any): Promise<any> => {
  const result = await BackendApi.post(`/pro/health-markers/bloodwork-file-upload/${userId}`, {
    userId: userId,
    filename: fileName,
    document: data,
    filetype: 'application/pdf'
  });
  return result;
};
