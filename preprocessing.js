import pandas as pd
import numpy as np
import os

from google.colab import drive
drive.mount('/content/drive')

directory_path = '/content/drive/MyDrive/Banknotes'
directory_files = os.listdir(directory_path)
df = pd.DataFrame({'file_names': directory_files})
df.tail()

values = ['100', '100', '100', '100', '100', '100', '100', '50',
          '50', '50', '10', '10', '10', '10', '20', '20', '20',
          '20', '100', '100', '100', '100', '100', '50', '50',
          '50', '50', '50', '20', '20', '20', '10', '10', '10', '10',
          '200', '200', '200', '200', '200', '200', '50', '50',
          '20', '50', '50', '20', '20', '20', '20', '20', '20', '200',
          '200', '200', '200', '200', '20', '20', '200', '50', '50',
          '20', '10', '1', '1', '5', '10', '5', '10', '5', '5', '5', '5',
          '10', '1', '1', '1', '1', '1', '1', '10', '10', '10', '1', '50',
          '0.5', '200', '0.5', '0.25', '0.25', '100', '10', '5', '20', '5',
          '5', '0.5', '5', '10', '10', '20', '20', '20', '20', '20', '20', 
          '50', '50', '100', '50', '100', '200', '200', '200', '200','10',
          '10','20','20','50','50','100','100','200','200','10','10','20',
          '20','50','50','100','100','200','200']

df['values'] = values
df

df.to_csv('/content/drive/MyDrive/Banknotes/data.csv',index=False)

from skimage import io
img = io.imread('/content/drive/MyDrive/Banknotes/128.jpg')

import matplotlib.pyplot as plt
plt.imshow(img)
