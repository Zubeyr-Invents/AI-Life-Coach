# Use an official Python runtime as a parent image
FROM python:3.12-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port the app will run on (8000 in this case)
EXPOSE 8000

# Command to run the app using Uvicorn (FastAPI server)
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
