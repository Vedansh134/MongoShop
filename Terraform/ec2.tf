
# Create a key pair for SSH access
resource "aws_key_pair" "deployer" {
  key_name   = "Automation-key"
  public_key = file("C:\\Users\\HP\\Desktop\\MongoShop_Gitlab\\terraform\\terra-key.pub")
}

# default VPC
resource "aws_default_vpc" "default" {
}

# Security group for the application
resource "aws_security_group" "app_deploy" {
  name        = "allow TLS"
  description = "Allow user to connect"
  vpc_id      = aws_default_vpc.default.id

  ingress {
    description = "port 22 allow for ssh"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "port 80 allow for http"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "allow 465 allow for email"
    from_port   = 465
    to_port     = 465
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "port 8080 allow for jenkins"
    from_port   = 8080
    to_port     = 8080
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "port 9000 allow for sonarqube"
    from_port   = 9000
    to_port     = 9000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    description = "allow all outbound traffic"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name        = "app_deploy"
    Environment = "production"
  }
}

# EC2 instance for Jenkins
resource "aws_instance" "Jenkins_instance" {
  ami             = var.ami_id
  instance_type   = var.instance_type
  key_name        = aws_key_pair.deployer.key_name
  security_groups = [aws_security_group.app_deploy.name]
  tags = {
    Name        = "Jenkins_instance"
    Environment = "production"
  }
  root_block_device {
    volume_size = 30
    volume_type = "gp3"
  }
}

